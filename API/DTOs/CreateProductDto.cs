using Core.Entities;
using System.ComponentModel.DataAnnotations;
//Protect your data model
//Decouple your API from your database ======> If you rename a column in your entity, only the mapping changes — the DTO stays the same.
//Shape responses for what clients actually need
//Validate input cleanly
//Prevent security vulnerabilities
//One of the reasons DTO made is for dodging weird clinet side error messages when validations are not met in core entity.

namespace API.DTOs
{
    public class CreateProductDto
    {
        [Required]
        public string Name { get; set; } = string.Empty; // Server side initiation to avoid nullability which is required in core entity(note: still notifies the user if field was ignored).


        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than 0" )]
        public decimal Price { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "QuantityInStock must be at least 1")]
        public int QuantityInStock { get; set; }
        [Required]
        public string Type { get; set; } = string.Empty;
        [Required]
        public string Brand { get; set; } = string.Empty;
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public string PictureUrl { get; set; } = string.Empty;
    }
}
