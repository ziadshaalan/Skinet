using System.Threading.Tasks;

namespace Core.Interfaces
{
    #region Where the abstraction belongs
    // WHY THE INTERFACE LIVES IN Core: Core holds the abstractions, Infrastructure
    // holds the implementations, and the API depends on Core only. That way the
    // controller can ask for "a captcha checker" without knowing that Turnstile
    // (or anything else) is behind it - swapping providers is a one-line change
    // in Program.cs.
    //
    // WHY IT MATTERS: a token that arrives from the browser proves nothing on its
    // own. Only the provider's server can confirm it. If the API trusted the token
    // without asking Turnstile, a bot could post garbage and create thousands of
    // accounts (and thousands of reset-password emails).
    #endregion
    /// <summary>Verifies that a captcha token really was issued by Cloudflare Turnstile.</summary>
    public interface ICaptchaService
    {
        /// <summary>
        /// Returns true only when the provider confirms the token is valid.
        /// Must never throw: a network hiccup has to be treated as "not verified".
        /// </summary>
        Task<bool> VerifyAsync(string token);
    }
}
