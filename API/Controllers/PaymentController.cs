using API.Extensions;
using API.SignalR;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.PowerBI.Api.Models;
using Stripe;
using System.Security.Cryptography.Xml;

namespace API.Controllers
{
    public class PaymentsController(IPaymentService paymentService,
        IGenericRepository<DeliveryMethod> dmRepo, IUnitOfWork unit,
        ILogger<PaymentsController> logger, IConfiguration config,
        IHubContext<NotificationHub> hubContext) : BaseApiController // IHubContext lets the controller send SignalR notifications from outside the Hub itself, e.g. from the Stripe webhook.

    {

        private readonly string _whSecret = config["StripeSettings:WhSecret"]!;
        [Authorize]
        [HttpPost("{cartId}")]
        public async Task<ActionResult<ShoppingCart>> CreateOrUpdatePaymentIntent (string cartId)
        {
            var cart = await paymentService.CreateOrUpdatePaymentIntent(cartId, User.GetEmail());
            if (cart == null) return BadRequest("Problem with the cart");

            return Ok(cart);
        }

        [HttpGet("delivery-methods")]
        public async Task<ActionResult<IReadOnlyList<DeliveryMethod>>> GetDeliveryMethods()
        {
            var deliveryMethods = await dmRepo.ListAllAsync();
            return Ok(deliveryMethods);
        }
        [HttpPost("webhook")]
        public async Task<IActionResult> StripeWebhook()
        {
            var json = await new StreamReader(Request.Body).ReadToEndAsync();   // Read raw request body as text (needed for Stripe signature verification)

            try
            {
                var stripeEvent = ConstructStripeEvent(json);
                if (stripeEvent.Data.Object is not PaymentIntent intent)
                {
                    return BadRequest("Invalid event data");
                }

                await HandlePaymentIntentSucceeded(intent);

                return Ok();
            }   
            catch (StripeException ex)
            {
                logger.LogError(ex, "Stripe webhook error");
                return StatusCode(StatusCodes.Status500InternalServerError, "Webhook error");
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An unexpected error occured");
                return StatusCode(StatusCodes.Status500InternalServerError, "An unexpected error occured");
            }
           
        }

        private Event ConstructStripeEvent(string json)
        {   //This is important because you don't simply trust the JSON sent to your endpoint.
            //Stripe gives you a Stripe - Signature header, and your webhook secret(_whSecret) is used to verify that the request actually came from Stripe.

            try
            {
                return EventUtility.ConstructEvent(json,        
                    Request.Headers["Stripe-Signature"],
                    _whSecret);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to construct stripe event");
                throw new StripeException("Invalid signature");
            }
        }

        private async Task HandlePaymentIntentSucceeded(PaymentIntent intent)
        {
            if (intent.Status == "succeeded")
            {
                var spec = new OrderSpecification(intent.Id, true);
                var order = await unit.Repository<Order>().GetEntityWithSpec(spec)
                    ?? throw new Exception("Order not found");


                // Convert the order total to whole cents, using the same rounding approach as Stripe.
                // Example: $19.995 × 100 = 1999.5 → 2000 cents.
                var orderTotalInCents = (long)Math.Round(order.GetTotal() * 100, MidpointRounding.AwayFromZero);   



                // Recheck: amount actually charged via Stripe vs order total, catches tampering if order request was intercepted/modified (e.g. via DevTools or direct API call) after PaymentIntent was created
                if (orderTotalInCents != intent.Amount)      
                {
                    order.Status = OrderStatus.PaymentMismatch; //Db trigger in order table which requires a unit.complete (savechanges)
                }
                else
                {
                    order.Status = OrderStatus.PaymentReceived;
                }

                await unit.Complete();

                var connectionId = NotificationHub.GetConnectionIdByEmail(order.BuyerEmail);  //"Does this user currently have a SignalR connection?, This can happen when the user closed the browser, lost connection, etc.

                if (!string.IsNullOrEmpty(connectionId))
                {
                    await hubContext.Clients.Client(connectionId)   //talking to SignalR's connection management
                        .SendAsync("OrderCompleteNotification", order.ToDto());
                }

            }
        }

    }
}
