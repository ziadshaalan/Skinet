using API.DTOs;
using Core.Entities.OrderAggregate;
using System.Runtime.CompilerServices;

namespace API.Extensions
{
    public static class OrderMappingExtension
    {
        public static OrderDto ToDto( this Order order)
        {
            return new OrderDto
            {
                Id = order.Id,
                ShippingAddress = order.ShippingAddress,
                PaymentSummary = order.PaymentSummary,
                DeliveryMethod = order.DeliveryMethod.Description,
                PaymentIntentId = order.PaymentIntentId,
                ShippingPrice = order.DeliveryMethod.Price,
                BuyerEmail = order.BuyerEmail,
                OrderDate = order.OrderDate,
                Subtotal = order.Subtotal,
                Discount = order.Discount,
                Total = order.GetTotal(),
                Status = order.Status.ToString(),
                OrderItems = order.OrderItems.Select(x => x.ToDto()).ToList(),
            };
        }

        public static OrderItemDto ToDto(this OrderItem orderItem)
        {
            return new OrderItemDto
            {
                ProductId = orderItem.ItemOrdered.ProductId,
                ProductName = orderItem.ItemOrdered.ProductName,
                PictureUrl = orderItem.ItemOrdered.PictureUrl,
                Price = orderItem.Price,
                Quantity = orderItem.Quantity
            };
        }
    }
}
