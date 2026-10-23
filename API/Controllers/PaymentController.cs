using API.DTOs;
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
using Microsoft.AspNetCore.RateLimiting;
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

        // How many times to re-check for the order before giving up, and how long to wait between checks
        private const int MaxOrderLookupRetries = 5;
        private const int OrderLookupRetryDelayMs = 300;

        [EnableRateLimiting("payment-intent")]
        [HttpPost("{cartId}")] 
        public async Task<ActionResult<ShoppingCart>> CreateOrUpdatePaymentIntent(string cartId, PaymentIntentRequesetDto request)
        {
            var buyer = User.ResolveBuyer(request.GuestEmail);
            if (buyer == null) return BadRequest("A valid email is required to check out as a guest");

            var cart = await paymentService.CreateOrUpdatePaymentIntent(cartId, buyer.Email, buyer.IsGuest);
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
                var order = await GetOrderWithRetry(spec)
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

                await unit.Complete();

                // Guest orders get no push: a guest can type any email, so the lookup could hit another user's connection
                if (!order.IsGuestOrder)
                {
                    // Ask the hub: does this buyer's email have an open SignalR connection right now?
                    var connectionId = NotificationHub.GetConnectionIdByEmail(order.BuyerEmail);

                    // Empty means the buyer closed the browser or lost connection, so there is nobody to notify
                    if (!string.IsNullOrEmpty(connectionId))
                    {
                        // Send the "OrderCompleteNotification" message, with the order data, to that one connection only
                        await hubContext.Clients.Client(connectionId)
                            .SendAsync("OrderCompleteNotification", order.ToDto());
                    }
                }

            }
        }

        // The webhook can arrive before the client's CreateOrder call finishes inserting the order (more likely over LAN/mobile due to added network latency), so retry briefly instead of failing on the first miss
        private async Task<Order?> GetOrderWithRetry(OrderSpecification spec)
        {
            for (var attempt = 1; attempt <= MaxOrderLookupRetries; attempt++)
            {
                var order = await unit.Repository<Order>().GetEntityWithSpec(spec);
                if (order != null) return order;

                if (attempt < MaxOrderLookupRetries)
                {
                    //The delay (300 ms) is the waiting time between attempts.
                    await Task.Delay(OrderLookupRetryDelayMs);
                }
            }

            return null;
        }

    }
}