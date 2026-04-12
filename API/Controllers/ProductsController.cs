using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {

        private readonly StoreContext context;

        public ProductsController(StoreContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id:int}")]   //   api/products/2
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var prodcut = await context.Products.FindAsync(id);

            if (prodcut == null) return NotFound();

            return Ok(prodcut);

        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)     //No need to add [FormBody] as [ApiController] Manages that
        {
            context.Products.Add(product);
            await context.SaveChangesAsync();
            return Ok(product);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product product)
        {
            if (product.Id != id || !ProductExists(id))
            {
                return BadRequest("Cannot update this product");
            } 

            context.Entry(product).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await context.Products.FindAsync(id);
            if (product == null) return NotFound();

            context.Products.Remove(product);
            await context.SaveChangesAsync();
            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return context.Products.Any(x => x.Id == id);
        }
    }
}
