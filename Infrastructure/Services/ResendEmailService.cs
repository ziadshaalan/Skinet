using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Infrastructure.Services
{
    #region Why Resend and its configuration
    // WHY RESEND: it is a simple REST API - one POST with a JSON body and a
    // Bearer token - so it needs no SDK and no extra infrastructure. Swapping it
    // for SendGrid/Postmark only means writing another IEmailService.
    //
    // WHY A TYPED HttpClient (AddHttpClient in Program.cs): the framework then
    // handles connection pooling, DNS refresh and handler lifetime for us. Creating
    // a new HttpClient per request is a well known source of socket exhaustion.
    //
    // CONFIGURATION (appsettings / user-secrets / Azure App Service settings):
    //   Email:ApiKey    - the Resend API key (secret! starts with "re_")
    //   Email:From      - the sender, e.g. "Skinet &lt;noreply@skinet.app&gt;"
    //   Email:ReplyTo   - optional, where replies should go
    //   Email:ApiBaseUrl- optional, only changed when testing against a local mock
    //
    // WHAT RESEND EXPECTS (POST /emails):
    //   Authorization: Bearer re_...
    //   { "from": "...", "to": ["..."], "subject": "...", "html": "...", "text": "..." }
    // and answers with { "id": "..." } on success.
    #endregion
    /// <summary>Sends transactional email through Resend (https://resend.com).</summary>
    public class ResendEmailService(
        HttpClient http,
        IConfiguration config,
        ILogger<ResendEmailService> logger) : IEmailService
    {
        #region Overriding the API base URL
        // It is only a DEFAULT - the value can be
        // overridden with "Email:ApiBaseUrl" so the service can be pointed at a
        // local mock while testing (and so a wrong URL does not have to be
        // changed in the code).
        #endregion
        /// <summary>The real Resend endpoint.</summary>
        private const string DefaultApiBaseUrl = "https://api.resend.com/emails";

        public async Task SendAsync(EmailMessage message)
        {
            // ---------------------------------------------------------------
            // 1) Read the configuration and check it BEFORE sending anything
            // ---------------------------------------------------------------
            var apiKey = config["Email:ApiKey"];
            var from = config["Email:From"];
            var replyTo = config["Email:ReplyTo"];
            var apiBaseUrl = config["Email:ApiBaseUrl"];

            // Fail loudly and clearly. Without this the request would go out with a
            // null Authorization header and Resend would answer "401 Unauthorized",
            // which says nothing about the real problem.
            if (string.IsNullOrWhiteSpace(apiKey))
                throw new InvalidOperationException(
                    "Email:ApiKey is not configured. Add it to appsettings/user-secrets before sending email.");

            if (string.IsNullOrWhiteSpace(from))
                throw new InvalidOperationException(
                    "Email:From is not configured. Add a verified sender address before sending email.");

            if (string.IsNullOrWhiteSpace(message.To))
                throw new InvalidOperationException("The email has no recipient.");

            var endpoint = string.IsNullOrWhiteSpace(apiBaseUrl) ? DefaultApiBaseUrl : apiBaseUrl;

            // ---------------------------------------------------------------
            // 2) Build the request
            // ---------------------------------------------------------------
            using var request = new HttpRequestMessage(HttpMethod.Post, endpoint)
            {
                Content = JsonContent.Create(new
                {
                    @from = from,
                    to = new[] { message.To },
                    subject = message.Subject,
                    html = message.Html,
                    // The plain-text part is optional. Sending "text = null" is
                    // harmless - Resend simply ignores it.
                    text = message.Text,
                    // Only send the field when there is something to send, so the
                    // JSON stays clean and older Resend endpoints are not confused.
                    reply_to = string.IsNullOrWhiteSpace(replyTo) ? null : replyTo
                },
                #region Why the JSON property names differ
                // The property names above are the ones Resend expects. Without
                // this setting the C# property names would be written in
                // PascalCase ("From", "ReplyTo"), which Resend does not understand.
                // "WhenWritingNull" leaves out the optional fields entirely
                // instead of sending "reply_to": null.
                #endregion
                options: new JsonSerializerOptions(JsonSerializerDefaults.Web)
                {
                    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull
                })
            };

            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);

            // ---------------------------------------------------------------
            // 3) Send it
            // ---------------------------------------------------------------
            var response = await http.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                // Log the provider's own error message - "401 Unauthorized" on its own
                // is not enough to work out what went wrong. Resend answers with
                // something like {"message":"API key is invalid", "name":"validation_error"}.
                var body = await response.Content.ReadAsStringAsync();
                logger.LogError("Resend rejected the email to {Recipient}: {Status} - {Body}",
                    message.To, (int)response.StatusCode, body);

                // Throws an HttpRequestException - the caller decides what to do.
                response.EnsureSuccessStatusCode();
            }

            // ---------------------------------------------------------------
            // 4) Log what actually happened
            // ---------------------------------------------------------------
            // Resend answers with the id of the sent message. Logging it is what
            // makes the difference between "we think we sent it" and "the provider
            // accepted it as message 8a1f...". The id can be looked up in the
            // Resend dashboard (Logs) to see the real delivery status.
            var result = await response.Content.ReadFromJsonAsync<ResendSendResult>();

            logger.LogInformation(
                "Email '{Subject}' accepted by Resend for {Recipient} (message id {MessageId})",
                message.Subject, message.To, result?.Id ?? "unknown");
        }

        /// <summary>
        /// Only the id of the sent message is needed. Resend answers with a lot
        /// more (the created_at timestamp, ...), but that is not required here.
        /// </summary>
        private record ResendSendResult([property: JsonPropertyName("id")] string? Id);
    }
}
