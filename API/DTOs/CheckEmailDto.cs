using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    /// <summary>
    /// Payload for the "does this email belong to an account?" question that the
    /// email-first sign-in form asks before it decides what to show.
    /// </summary>
    public class CheckEmailDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
