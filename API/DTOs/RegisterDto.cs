using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    #region Why a DTO instead of the entity
    // WHY A DTO INSTEAD OF THE ENTITY: the entity (AppUser) also holds things the
    // browser must never set - the id, the password hash, the security stamp, the
    // Stripe customer id. A DTO is the "public face" of the entity: it lists
    // exactly the fields a client is allowed to send.
    #endregion
    /// <summary>Payload for "create an account".</summary>
    public class RegisterDto
    {
        [Required]
        public string FirstName { get; set; } = string.Empty;

        [Required]
        public string LastName { get; set; } = string.Empty;

        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;

        #region Why marketing opt-in exists
        // Stored on the account so it can be used when a marketing campaign runs.
        // It is opt-in, which is also what the law (GDPR / CAN-SPAM) expects.
        #endregion
        /// <summary>Did the person ask to receive news and offers by email?</summary>
        public bool MarketingOptIn { get; set; }

        #region How the captcha token is verified
        // It is verified with Cloudflare before the account is created. [Required]
        // only makes sure the field is not empty - the real check happens in the
        // controller, because only the provider can say whether a token is genuine.
        #endregion
        /// <summary>The one-time token produced by the Cloudflare Turnstile widget in the browser.</summary>
        [Required]
        public string CaptchaToken { get; set; } = string.Empty;
    }
}
