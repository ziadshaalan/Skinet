using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace API.Extensions
{
    // ===== BuyerExtensions: decides who the buyer is (signed-in user or guest) in one place =====

    // The result: which email to use, and whether this order belongs to a guest

    // record = short class for plain data: auto constructor, read-only properties, equality by value

    public record Buyer(string Email, bool IsGuest);

    public static class BuyerExtensions
    {
        // Returns the buyer, or null when there is no signed-in user and no valid guest email
        public static Buyer? ResolveBuyer(this ClaimsPrincipal user, string? guestEmail)
        {
            // Case 1: signed in -> use only the email from the cookie, never the request body
            if (user.Identity?.IsAuthenticated == true)
                return new Buyer(user.GetEmail(), false);

            // Case 2: guest -> remove accidental spaces (null-safe)
            var email = guestEmail?.Trim();

            // Reject if empty, over the 254-character email limit, or not shaped like an email
            if (string.IsNullOrEmpty(email) || email.Length > 254 || !new EmailAddressAttribute().IsValid(email))
                return null;

            // Valid guest email -> mark the buyer as a guest
            return new Buyer(email, true);
        }
    }
}