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
    public class BaseApiController : ControllerBase
    {
        // CreatePagedResult: handles listing + counting + wrapping into Pagination<T> response
        // Any controller that needs paging just inherits this and calls CreatePagedResult
        protected async Task<ActionResult> CreatePagedResult<T>(IGenericRepository<T> repo, ISpecification<T> spec,
            int pageIndex, int pageSize ) where T : BaseEntity
        {
            var items = await repo.ListAsync(spec);
            var count = await repo.CountAsync(spec); //spec is ISpecification<T> because ProductSpecification inherits from BaseSpecification<T> which implements ISpecification<T>.
            var pagination = new Pagination<T>(pageIndex, pageSize, count, items);

            return Ok(pagination); //requires Ok() because ActionResult<T> has no implicit conversion for collections
        }
    }
}
