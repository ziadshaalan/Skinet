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



    // SPECIFICATION PATTERN — how a query gets built and run:
    // 1. ProductSpecification (extends BaseSpecification<T>) describes the query as DATA — Criteria, OrderBy, Skip/Take — no DB code, nothing executes yet
    // 2. GenericRepository<T> receives the spec (ISpecification<T>) and hands it to SpecificationEvaluator<T> — repository itself never builds the query
    // 3. SpecificationEvaluator<T>.GetQuery() reads the spec's rules and chains them onto IQueryable (.Where/.OrderBy/.Skip/.Take) — still just a plan, nothing sent to SQL yet
    // 4. Back in GenericRepository<T>, .ToListAsync() is the ONLY point EF Core (via StoreContext) turns that plan into real SQL and hits the database

    public class ProductsController(IUnitOfWork unit) : BaseApiController
    {
        
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<Product>>> GetProducts([FromQuery]ProductSpecParams productParams)
        // IReadOnlyList has Count, index access [i], and data is fully loaded in memory upfront
        // IEnumerable — no Count, no index access, data loads lazily only when iterated
        {
            var spec = new ProductSpecification(productParams);

            return await CreatePagedResult(unit.Repository<Product>(), spec, productParams.PageIndex, productParams.PageSize );
        }

        [HttpGet("{id:int}")]   //   api/products/2
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var prodcut = await unit.Repository<Product>().GetByIdAsync(id);

            if (prodcut == null) return NotFound();

            return prodcut;

        }

        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)     //No need to add [FormBody] as [ApiController] Manages that
        {
            unit.Repository<Product>().Add(product);
            if(await unit.Complete())   
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
            unit.Repository<Product>().Update(product);
            
           if (await unit.Complete())
            {
                return NoContent();
            }
            return BadRequest("Problem updating the product");
        }

        
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Product>> DeleteProduct(int id)
        {
            var product = await unit.Repository<Product>().GetByIdAsync(id);
            if (product == null) return NotFound();

            unit.Repository<Product>().Remove(product);
            if( await unit.Complete())
            {
                return NoContent();
            }

            return BadRequest("Problem deleting the product");
        }


        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetBrands()
        {
            var spec = new BrandListSpecification();

            return Ok(await unit.Repository<Product>().ListAsync(spec));

        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<string>>> GetTypes()
        {
            var spec = new TypeListSpecification();

            return Ok(await unit.Repository<Product>().ListAsync(spec));
        }

        private bool ProductExists(int id)
        {
            return unit.Repository<Product>().Exists(id);
        }
    }
}
