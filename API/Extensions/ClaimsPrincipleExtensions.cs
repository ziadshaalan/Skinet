using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Authentication;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extensions
{
    //Extension methods let you "attach" a new method to an existing class(UserManager) without modifying it.
    public static class ClaimsPrincipleExtensions
    {

        // User = ClaimsPrincipal built from the cookie by auth middleware
        // (this happens automatically before this method runs).
        // FindFirstValue reads the email claim out of that — no DB call yet.
        public static async Task<AppUser> GetUserByEmail(this UserManager<AppUser> userManager, ClaimsPrincipal user)
        {
            var userToReturn = await userManager.Users.FirstOrDefaultAsync(x => x.Email == user.GetEmail());
            if (userToReturn == null) throw new AuthenticationException("User not found");

            return userToReturn;
        }

        public static async Task<AppUser> GetUserByEmailWithAddress(this UserManager<AppUser> userManager, ClaimsPrincipal user)
        {

            var userToReturn = await userManager.Users.Include(x => x.Address).FirstOrDefaultAsync(x => x.Email == user.GetEmail());
            if (userToReturn == null) throw new AuthenticationException("User not found");

            return userToReturn;
        }

        public static string GetEmail(this ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);
            if (email == null) throw new AuthenticationException("Email claim not found");

            return email;
        }
    }
}
