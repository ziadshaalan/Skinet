using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController(IProductRepository repo) : ControllerBase
    {
        
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts(string? brand,
            string? type, string? sort)                                         // IReadOnlyList has Count, index access [i], and data is fully loaded in memory upfront
                                                                              // IEnumerable — no Count, no index access, data loads lazily only when iterated
        {
            return Ok( await repo.GetProductsAsync(brand, type, sort));  //requires Ok() because ActionResult<T> has no implicit conversion for collections
        }

        [HttpGet("{id:int}")]   //   api/products/2
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var prodcut = await repo.GetProductByIdAsync(id);

            if (prodcut == null) return NotFound();

            return prodcut;

        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)     //No need to add [FormBody] as [ApiController] Manages that
        {
           repo.AddProduct(product);
            if(await repo.SaveChangesAsync())   
            {
                return CreatedAtAction("GetProduct", new { id = product.Id }, product);     /* It automatically builds the URL to the newly created resource
                                                                                             * by calling the GetProduct action and creating route parameter for that action*/
            }
            return BadRequest("Problem creating product");
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product product)
        {
            if (product.Id != id || !ProductExists(id))
            {
                return BadRequest("Cannot update this product");
            }
            repo.UpdateProduct(product);
            
           if (await repo.SaveChangesAsync())
            {
                return NoContent();
            }
            return BadRequest("Problem updating the product");
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await repo.GetProductByIdAsync(id);
            if (product == null) return NotFound();

            repo.DeleteProduct(product);
            if( await repo.SaveChangesAsync())
            {
                return NoContent();
            }

            return BadRequest("Problem deleting the product");
        }


        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
        {
            return Ok(await repo.GetBrandsAsync());

        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
        {
            return Ok(await repo.GetTypesAsync());
        }

        private bool ProductExists(int id)
        {
            return repo.ProductExists(id);
        }
    }
}
