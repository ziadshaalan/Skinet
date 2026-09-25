using API.DTOs;
using Azure.Storage.Blobs.Models;
using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using API.Extensions;


namespace API.Controllers
{
    public class AccountController(SignInManager<AppUser> signInManager) : BaseApiController
    {

        // SignInManager<AppUser> is auto-registered by AddIdentityApiEndpoints<AppUser>()
        // in Program.cs. It internally wraps UserManager<AppUser>, which reads/writes
        // the AspNetUsers table in the skinet DB via StoreContext.
        [HttpPost("register")]

        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            var user = new AppUser
            {
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password); /// CreateAsync returns IdentityResult: Succeeded (bool) + Errors
                                                                                                  // (list of Code/Description) built internally by Identity's validators
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);    // // Copy each Identity error (Code + Description) into ASP.NET's
                                                                                // built-in ModelState — the same bucket used for [Required] etc.
                }


                return ValidationProblem();      // Reads ModelState → returns standardized RFC 9110 Problem Details JSON.
            }

            return Ok();
        }


        // [Authorize] runs BEFORE this method executes — blocks with 401
        // automatically if no valid cookie is sent. Method body only runs
        // for already-authenticated users, so no manual check needed here.

        [Authorize]
        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();

            return NoContent();

        }

        // NO [Authorize] here on purpose — this endpoint must work even when
        // NOT logged in, so Angular can call it blindly on app load without
        // getting a 401 "error" for a perfectly normal "not logged in" state.

        [HttpGet("user-info")]
        public async Task<ActionResult> GetUserInfo() 
        {
            // Manual check (replaces [Authorize]) — if not authenticated,
            // return empty 204 instead of letting it look like an error.
            if (User.Identity?.IsAuthenticated == false) return NoContent();

            
            var user = await signInManager.UserManager.GetUserByEmailWithAddress(User);        // ==> an extension made for UserManager class 

           
            if (user == null) return Unauthorized();


            // Anonymous object = mini inline DTO — only exposes safe fields,
            // never PasswordHash/SecurityStamp/etc.
            return Ok(new
            {
                user.FirstName,
                user.LastName,
                user.Email,
                Address = user.Address?.ToDto(),     // explicit name needed — result of a method call, not a bare property
                Roles = User.FindFirstValue(ClaimTypes.Role)
            });

        }

        // Always returns 200 — "false" is a valid, non-error answer to
        // "are you logged in?". Lets Angular read a plain boolean without
        // needing try/catch just to check auth state.

        [HttpGet("is-authenticated")]
        public ActionResult GetAuthState()
        {
            // No DB call — just reads the flag already set by auth middleware.

            return Ok(new {IsAuthenticated = User.Identity?.IsAuthenticated ?? false});
        }


        [HttpPost("address")]
        public async Task<ActionResult<Address>> CreateOrUpdateAddress(AddressDto addressDto)
        {
            // Loads user + their Address (Include) so we can check if one exists
            var user = await signInManager.UserManager.GetUserByEmailWithAddress(User); // Extension methods handle Entity <-> DTO mapping (keeps controller clean):

            if (user.Address == null)
            {
                user.Address = addressDto.ToEntity();   // CREATE: new object, DTO → Entity
            } else
            {
                user.Address.UpdateFromDto(addressDto); // UPDATE: mutate existing tracked entity


            }

            var result = await signInManager.UserManager.UpdateAsync(user);

            if (!result.Succeeded) return BadRequest("Problem updating user address");

            return Ok(user.Address.ToDto());    // Entity → DTO before returning to client
        }

    }
}
