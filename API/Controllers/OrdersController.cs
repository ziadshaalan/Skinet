using API.DTOs;
using API.Extensions;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using System.ComponentModel.DataAnnotations;

namespace API.Controllers
{
    //This order is made after the payment is completed, so if there is any problem creating the order, contact customer service.

    // No class-level [Authorize]: CreateOrder and the guest status check must work without a login
    public class OrdersController(IUnitOfWork unit, ICartService cartService) : BaseApiController
    {
        // Signed-in user -> normal order; anonymous -> guest order flagged IsGuestOrder
        [EnableRateLimiting("guest-order")]
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(CreateOrderDto orderDto)
        {
            // Who is buying: cookie email for signed-in users, validated GuestEmail for anonymous callers
            var buyer = User.ResolveBuyer(orderDto.GuestEmail);
            if (buyer == null) return BadRequest("A valid email is required to check out as a guest");

            var cart = await cartService.GetCartAsync(orderDto.CartId);

            if (cart == null) return BadRequest("Cart not found");

            if (cart.PaymentIntentId == null) return BadRequest("No payment intent for this order");

            var items = new List<OrderItem>();

            foreach (var item in cart.Items)
            {
                var productItem = await unit.Repository<Product>().GetByIdAsync(item.ProductId);
                if (productItem == null) return BadRequest("Problem with the order");

                var itemOrdered = new ProductItemOrdered
                {
                    ProductId = productItem.Id,
                    ProductName = productItem.Name,
                    PictureUrl = productItem.PictureUrl
                };

                var orderItem = new OrderItem
                {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity,
                };
                items.Add(orderItem);

            }

            var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync(orderDto.DeliveryMethodId);
            if (deliveryMethod == null) return BadRequest("No delivery method selected");

            var order = new Order
            {
                BuyerEmail = buyer.Email,
                // Guest orders are hidden from every "My orders" list, even when the email matches an account
                IsGuestOrder = buyer.IsGuest,
                DeliveryMethod = deliveryMethod,
                OrderItems = items,
                PaymentIntentId = cart.PaymentIntentId,
                ShippingAddress = orderDto.ShippingAddress,
                Subtotal = items.Sum(x => x.Price * x.Quantity),
                PaymentSummary = orderDto.PaymentSummary,
                Discount = orderDto.Discount,
            };

            unit.Repository<Order>().Add(order);
            if (await unit.Complete())
            {
                return Ok(order);
            }
            return BadRequest("Problem creating order");
        }

        // Still login-only: [Authorize] moved here from the class
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetOrdersForUser()
        {
            var spec = new OrderSpecification(User.GetEmail());

            var order = await unit.Repository<Order>().ListAsync(spec);

            var ordersToReturn = order.Select(x => x.ToDto()).ToList();

            return Ok(ordersToReturn);
        }

        // Still login-only: [Authorize] moved here from the class
        [Authorize]
        [HttpGet("{id:int}")]
        public async Task<ActionResult<OrderDto>> GetOrderById(int id)
        {
            var spec = new OrderSpecification(User.GetEmail(), id);

            var order = await unit.Repository<Order>().GetEntityWithSpec(spec);
            if (order == null) return NotFound();

            return order.ToDto();
        }

        // Guest success page polls this; the payment intent id is the lookup secret
        [EnableRateLimiting("guest-order")]
        [HttpGet("by-payment-intent/{paymentIntentId}")]
        public async Task<ActionResult<OrderDto>> GetGuestOrderByPaymentIntent(string paymentIntentId)
        {
            var spec = new OrderSpecification(paymentIntentId, true);

            var order = await unit.Repository<Order>().GetEntityWithSpec(spec);

            // Guest orders only, so a signed-in user's order can never be read through this open endpoint
            if (order == null || !order.IsGuestOrder) return NotFound();

            return order.ToDto();
        }
    }
}