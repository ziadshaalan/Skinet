using System.Threading.Tasks;

namespace Core.Interfaces
{
    #region Interface scope and error reporting
    // WHY THE INTERFACE LIVES IN Core: same idea as ICaptchaService - the API
    // controller should say "send this email", not "call Resend's REST API".
    // The concrete provider (Resend) is an Infrastructure detail and can be
    // replaced without touching a single controller.
    //
    // HOW A FAILURE IS REPORTED: SendAsync THROWS when the provider rejects
    // the message or cannot be reached. The caller decides what to do with
    // it (log it, retry it, ...). Silently swallowing the error would be
    // dangerous here: the user is told "check your email" while nothing was
    // ever sent, and nobody would notice until somebody complained.
    #endregion
    /// <summary>Sends a transactional email (password reset, order confirmation, ...).</summary>
    public interface IEmailService
    {
        #region How failures are reported
        // Throws (for example InvalidOperationException when the API key is
        // missing, or HttpRequestException when Resend is unreachable) when
        // the message could not be handed over to the provider.
        #endregion
        /// <summary>Sends one email.</summary>
        Task SendAsync(EmailMessage message);
    }
}
