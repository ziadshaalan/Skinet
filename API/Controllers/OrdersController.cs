using API.DTOs;
using API.Extensions;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace API.Controllers
{
    //This order is made after the payment is completed, so if there is any problem creating the order, contact customer service.
    [Authorize]
    public class OrdersController(IUnitOfWork unit, ICartService cartService) : BaseApiController
    {
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(CreateOrderDto orderDto)
        {
            var email = User.GetEmail();
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
                    Quantity = item.Quantity, // Question: in this case quantity comes from client side without recheck, isnt that vulnerable to intruders changing the real quantity
                };
                items.Add(orderItem);

            }

            var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync(orderDto.DeliveryMethodId);
            if (deliveryMethod == null) return BadRequest("No delivery method selected");

            var order = new Order
            {
                BuyerEmail = email,
                DeliveryMethod = deliveryMethod,
                OrderItems = items,
                PaymentIntentId = cart.PaymentIntentId,
                ShippingAddress = orderDto.ShippingAddress,
                Subtotal = items.Sum(x => x.Price * x.Quantity), // why lambdaas this is not fetched from database its fetched from regular array and why didnt we just do the interation inside the for each loop
                PaymentSummary = orderDto.PaymentSummary,
            };

            unit.Repository<Order>().Add(order);
            if (await unit.Complete())
            {
                return Ok(order);
            }
            return BadRequest("Problem creating order");
        }

        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetOrdersForUser()
        {
            var spec = new OrderSpecification(User.GetEmail());

            var order = await unit.Repository<Order>().ListAsync(spec);
            
            var ordersToReturn = order.Select(x => x.ToDto()).ToList();

            return Ok(ordersToReturn);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<OrderDto>> GetOrderById(int id)
        {
            var spec = new OrderSpecification(User.GetEmail(), id);

            var order = await unit.Repository<Order>().GetEntityWithSpec(spec);
            if (order == null) return NotFound();

            return order.ToDto();
        }
    }
}
