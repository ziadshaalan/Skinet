using API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        [HttpGet("unauthorized")]   // Test endpoint that returns 401.
        public IActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet("badrequest")]   // Test endpoint that returns 400.
        public IActionResult GetBadRequest()
        {
            return BadRequest();
        }

        [HttpGet("notfound")]   // Test endpoint that returns 404.
        public IActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("internalerror")]   // Intentionally throws exception to test global exception middleware.
        public IActionResult GetInternalError()
        {
            throw new Exception("This is a test exception.");
        }

        [HttpPost("validationerror")]
        public IActionResult GetValidationError(CreateProductDto product)
        {
            return Ok();
        }
        [Authorize]

        [HttpGet("secret")]   // Test endpoint that requires authorization.
        public IActionResult GetSecret()
        {
            var name = User.FindFirst(ClaimTypes.Name)?.Value;
            var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            return Ok("Hello " + name + "with the id " + id);
        }
    }
}
