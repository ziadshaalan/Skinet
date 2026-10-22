using System.Net;
using Core.Interfaces;

namespace Infrastructure.Services
{
    #region Template location and styling
    // WHY THE TEMPLATES LIVE HERE AND NOT IN THE CONTROLLER: the controller should
    // only decide WHICH email to send and to whom. The markup is a presentation
    // concern, so it lives in Infrastructure where it can be changed without
    // touching the request pipeline.
    //
    // WHY EVERY STYLE IS INLINE: email clients (Outlook, Gmail, Apple Mail) throw
    // away &lt;style&gt; blocks and external stylesheets. The only styling that
    // survives everywhere is a `style="..."` attribute on the element itself.
    //
    // SECURITY NOTE: anything that comes from the database (a first name) is HTML
    // encoded before it is dropped into the body, so a user who calls themselves
    // "&lt;script&gt;..." cannot inject markup into someone else's inbox.
    #endregion
    /// <summary>The emails the API sends: subject, HTML body and plain-text body.</summary>
    public static class EmailTemplates
    {
        #region What the reset email contains
        // The button holds a link that contains a single-use, time-limited token.
        // Whoever can open that link has proved they own the inbox, which is the
        // entire point of the "forgot password" flow.
        //
        // Returns a ready-to-send EmailMessage: the subject, the HTML version and
        // the plain-text version (for mail clients that cannot show HTML).
        #endregion
        /// <summary>Password-reset email.</summary>
        /// <param name="to">The address the email is sent to.</param>
        /// <param name="firstName">Friendly name of the account owner (may be null).</param>
        /// <param name="link">Absolute URL of the reset page, including the token.</param>
        public static EmailMessage PasswordReset(string to, string? firstName, string link)
        {
            // Encode everything that comes from the database before it is put into
            // the body. The link is built by us, but it contains the user's email
            // address, so it is encoded too.
            var name = WebUtility.HtmlEncode(string.IsNullOrWhiteSpace(firstName) ? "there" : firstName);
            var url = WebUtility.HtmlEncode(link);

            // The plain-text version uses the RAW link (no HTML encoding needed) -
            // encoding it would put &amp; into the url and break it.
            var plainName = string.IsNullOrWhiteSpace(firstName) ? "there" : firstName.Trim();

            var html = $"""
                <!DOCTYPE html>
                <html>
                <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Roboto,Arial,sans-serif;color:#18181b;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;">
                    <tr>
                      <td>
                        <h1 style="margin:0 0 16px;font-size:22px;font-weight:600;">Reset your password</h1>
                        <p style="margin:0 0 16px;font-size:15px;line-height:1.5;">
                          Hi {name},
                        </p>
                        <p style="margin:0 0 24px;font-size:15px;line-height:1.5;">
                          We received a request to reset the password for your Skinet account.
                          Click the button below to choose a new one. The link expires in 24 hours.
                        </p>
                        <a href="{url}"
                           style="display:inline-block;background:#005cbb;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:500;">
                          Reset password
                        </a>
                        <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#71717a;">
                          If you did not request this, you can safely ignore this email -
                          your password will not change until someone opens the link.
                        </p>
                        <p style="margin:16px 0 0;font-size:12px;line-height:1.5;color:#a1a1aa;word-break:break-all;">
                          If the button does not work, copy this link into your browser:<br>{url}
                        </p>
                      </td>
                    </tr>
                  </table>
                </body>
                </html>
                """;

            // The plain-text version. NO HTML TAGS AT ALL - a mail client shows
            // this as-is. This is also what most inbox notifications preview.
            var text = $"""
                Reset your password

                Hi {plainName},

                We received a request to reset the password for your Skinet account.
                Open the link below to choose a new one. The link expires in 24 hours.

                {link}

                If you did not request this, you can safely ignore this email - your
                password will not change until someone opens the link.
                """;

            return new EmailMessage
            {
                To = to,
                Subject = "Reset your password",
                Html = html,
                Text = text
            };
        }
    }
}
