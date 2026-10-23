using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Net.Http.Json;
using System.Text.Json.Serialization;

namespace Infrastructure.Services
{
    #region How Turnstile verification works
    // HOW THE WHOLE THING WORKS:
    //   1. The browser loads the Turnstile script and renders a widget (see the
    //      Turnstile component on the Angular side).
    //   2. The widget gives the browser a short-lived token.
    //   3. The browser sends that token to our API together with the form.
    //   4. The API sends the token to Cloudflare, which answers "valid" or "not valid".
    //      Only Cloudflare's answer is trusted - a token in the request body proves
    //      nothing on its own.
    //
    // CONFIGURATION (appsettings):
    //   Turnstile:SecretKey - the server-side secret (never sent to the browser).
    //   Turnstile:SiteKey   - the public site key, sent to the browser via environment.ts.
    //
    // NOTE: Cloudflare publishes "always passes" test keys (1x0000000000000000000000000000000AA)
    // that are meant for local development. Swap them for the real ones before going live.
    #endregion
    /// <summary>Verifies Cloudflare Turnstile tokens against Cloudflare's siteverify endpoint.</summary>
    public class TurnstileCaptchaService(
        HttpClient http,
        IConfiguration config,
        ILogger<TurnstileCaptchaService> logger) : ICaptchaService
    {
        private const string VerifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

        public async Task<bool> VerifyAsync(string token)
        {
            // An empty token can never be valid. Bail out before spending a request.
            if (string.IsNullOrWhiteSpace(token)) return false;

            var secret = config["Turnstile:SecretKey"];
            // A missing secret rejects every single visitor, and Cloudflare only says so
            // in the response body. Say it here as well, because "the captcha never
            // works" is otherwise indistinguishable from "people keep failing it".
            if (string.IsNullOrWhiteSpace(secret))
            {
                logger.LogError("Turnstile:SecretKey is not configured, so every captcha is rejected. " +
                                "Set the Turnstile__SecretKey application setting on the server.");
                return false;
            }

            try
            {
                var response = await http.PostAsync(
                    VerifyEndpoint,
                    new FormUrlEncodedContent(new Dictionary<string, string>
                    {
                        ["secret"] = secret,
                        ["response"] = token
                    }));

                // Cloudflare answers with HTTP 200 even when the token is wrong - the
                // verdict is in the body ("success": true/false), so the status code
                // alone must not be treated as the answer.
                response.EnsureSuccessStatusCode();

                var result = await response.Content.ReadFromJsonAsync<TurnstileResult>();

                // error-codes names the reason: missing-input-secret (no secret sent),
                // invalid-input-secret (secret does not belong to the sitekey),
                // invalid-input-response (expired or already used token), ...
                if (result?.Success != true)
                {
                    logger.LogWarning("Cloudflare Turnstile rejected the captcha: {ErrorCodes}",
                        string.Join(", ", result?.ErrorCodes ?? Array.Empty<string>()));
                }

                return result?.Success == true;
            }
            catch (Exception ex)
            {
                // Never let a provider outage turn into a 500 on our side. "Cannot verify"
                // is treated as "not verified", which fails closed (no account is created).
                logger.LogError(ex, "Could not reach Cloudflare Turnstile to verify the captcha token");
                return false;
            }
        }

        /// <summary>
        /// Only the "success" flag is needed to take a decision. "error-codes" is read
        /// as well so a misconfiguration can be named in the log instead of guessed.
        /// </summary>
        private record TurnstileResult(
            bool Success,
            [property: JsonPropertyName("error-codes")] string[]? ErrorCodes);
    }
}
