using Core.Entities.OrderAggregate;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class CreateOrderDto
    {
        [Required]
        public string CartId { get; set; } = string.Empty;
        [Required]
        public int DeliveryMethodId { get; set; }
        [Required]
        public ShippingAddress ShippingAddress { get; set; } = null!;
        [Required]
        public PaymentSummary PaymentSummary { get; set; } = null!;
        // Recommended: extract ShippingAddressDto/PaymentSummaryDto with field-level validation
        public decimal Discount { get; set; }
        public string? GuestEmail { get; set; } // Only used when the caller is not signed in


    }
}
