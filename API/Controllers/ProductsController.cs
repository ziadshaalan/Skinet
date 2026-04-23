using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Core.Specification;
using Infrastructure.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
// controller should stay thin 
// easier to read and test
// business/query logic is not mixed with HTTP concerns
//delegates query-building to the specification layer

namespace API.Controllers
{

   
    public class ProductsController(IGenericRepository<Product> repo) : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts([FromQuery]ProductSpecParams productParams)
        // IReadOnlyList has Count, index access [i], and data is fully loaded in memory upfront
        // IEnumerable — no Count, no index access, data loads lazily only when iterated
        {
            var spec = new ProductSpecification(productParams);

            return await CreatePagedResult(repo, spec, productParams.PageSize, productParams.PageIndex);
        }

        [HttpGet("{id:int}")]   //   api/products/2
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var prodcut = await repo.GetByIdAsync(id);

            if (prodcut == null) return NotFound();

            return prodcut;

        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)     //No need to add [FormBody] as [ApiController] Manages that
        {
            repo.Add(product);
            if(await repo.SaveAllAsync())   
            {
                return CreatedAtAction("GetProduct", new { id = product.Id }, product);     /* It automatically builds the URL to the newly created resource
                                                                                             * by calling the GetProduct action and creating route parameter for that action*/
            }
            return BadRequest("Problem creating product");
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, Product product)
        {
            repo.Add(product);
            if (product.Id != id || !ProductExists(id))
            {
                return BadRequest("Cannot update this product");
            }
            repo.Update(product);
            
           if (await repo.SaveAllAsync())
            {
                return NoContent();
            }
            return BadRequest("Problem updating the product");
        }

        
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await repo.GetByIdAsync(id);
            if (product == null) return NotFound();

            repo.Remove(product);
            if( await repo.SaveAllAsync())
            {
                return NoContent();
            }

            return BadRequest("Problem deleting the product");
        }


        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
        {
            var spec = new BrandListSpecification();

            return Ok(await repo.ListAsync(spec));

        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
        {
            var spec = new TypeListSpecification();

            return Ok(await repo.ListAsync(spec));
        }

        private bool ProductExists(int id)
        {
            return repo.Exists(id);
        }
    }
}
