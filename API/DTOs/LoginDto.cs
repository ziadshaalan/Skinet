using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    #region Why a custom DTO
    // WHY A CUSTOM DTO: the built-in Identity endpoint (MapIdentityApi) is not mapped
    // in this API anymore - it exposed a POST /api/register route that created
    // accounts WITHOUT the captcha check. See AccountController for the full story.
    // This DTO is the replacement for that endpoint.
    #endregion
    /// <summary>Payload for the email + password sign-in endpoint.</summary>
    public class LoginDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
