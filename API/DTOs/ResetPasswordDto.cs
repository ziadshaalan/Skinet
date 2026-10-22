using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    #region Why email and token travel together
    // Email + Token both come from the link that was emailed, so they travel
    // together: the token is only valid for the account it was generated for.
    #endregion
    /// <summary>Payload for "here is the new password".</summary>
    public class ResetPasswordDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// The URL-safe base64 version of Identity's reset token.
        /// The controller decodes it before handing it to Identity.
        /// </summary>
        [Required]
        public string Token { get; set; } = string.Empty;

        [Required]
        public string NewPassword { get; set; } = string.Empty;
    }
}
