using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;

namespace API.Controllers
{
    // BaseApiController — shared base for all API controllers
    // Contains reusable helper methods to avoid repeating logic across controllers
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase, IDtoConvertible
    {
        // CreatePagedResult: handles listing + counting + wrapping into Pagination<T> response
        // Any controller that needs paging just inherits this and calls CreatePagedResult

        protected async Task<ActionResult> CreatePagedResult<T>(IGenericRepository<T> repo, ISpecification<T> spec,
          int pageIndex, int pageSize)
          where T : BaseEntity
        {
            var items = await repo.ListAsync(spec);
            var count = await repo.CountAsync(spec); //spec is ISpecification<T> because ProductSpecification inherits from BaseSpecification<T> which implements ISpecification<T>.
            var pagination = new Pagination<T>(pageIndex, pageSize, count, items);

            return Ok(pagination); //requires Ok() because ActionResult<T> has no implicit conversion for collections
        }


        protected async Task<ActionResult> CreatePagedResult<T, TDto>(IGenericRepository<T> repo,
            ISpecification<T> spec,
            int pageIndex, int pageSize,
            Func<T, TDto> toDto )
            where T : BaseEntity, IDtoConvertible
            where TDto : class

        {
            var items = await repo.ListAsync(spec);
            var count = await repo.CountAsync(spec);
            /*
             * 
                 *  "Take every entity in items and run the conversion function received from the controller argument on it."
                    items =
                [
                    order1,
                    order2,
                    order3
                ]

                order1 → order1.ToDto() → dto1
                order2 → order2.ToDto() → dto2
                order3 → order3.ToDto() → dto3
             */
            var dtoItems = items.Select(toDto).ToList();    

            var pagination = new Pagination<TDto>(pageIndex, pageSize, count, dtoItems);

            return Ok(pagination);
        }
    }
}
