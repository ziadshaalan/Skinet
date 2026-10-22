using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    #region Why the answer is always 200
    // NOTE: the endpoint always answers 200, even for an address that is not
    // registered. That is on purpose - otherwise this endpoint would tell an
    // attacker which email addresses have an account.
    #endregion
    /// <summary>Payload for "send me a reset link".</summary>
    public class ForgotPasswordDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
