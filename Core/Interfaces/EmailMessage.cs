namespace Core.Interfaces
{
    #region Why a class instead of parameters
    // WHY A CLASS INSTEAD OF FOUR PARAMETERS ON SendAsync:
    // a method like SendAsync(to, subject, html, text, replyTo) grows a new
    // argument for every new feature and eventually becomes unreadable and
    // easy to mix up. A small object with named properties keeps every call
    // site self-explanatory, and a new field can be added later without
    // breaking anything.
    //
    // It lives in Core (and not in Infrastructure) because Core owns the
    // IEmailService contract - the interface and its parameter type belong
    // together.
    #endregion
    /// <summary>One email, ready to be sent.</summary>
    public record EmailMessage
    {
        #region BCC is a different feature
        // A single address for now - a newsletter with many
        // recipients would need BCC (so the recipients do not see each other),
        // which is a different feature.
        #endregion
        /// <summary>The recipient.</summary>
        public required string To { get; init; }

        /// <summary>The subject line shown in the inbox.</summary>
        public required string Subject { get; init; }

        #region Why email styles are inline
        // Every style has to be inline (style="..."), because Outlook and
        // Gmail throw away &lt;style&gt; blocks and external stylesheets.
        #endregion
        /// <summary>The HTML body - what a mail client with HTML support shows.</summary>
        public required string Html { get; init; }

        #region Why a plain-text part matters
        // WHY IT MATTERS: a mail client that cannot (or refuses to) show the
        // HTML part falls back to the text part. Without it, those clients
        // show the raw HTML source, which looks like a wall of tags. It is
        // also what most inbox notifications show as a preview.
        //
        // Optional: when it is null, only the HTML part is sent.
        #endregion
        /// <summary>The plain-text alternative.</summary>
        public string? Text { get; init; }

        #region Why reply-to is separate
        // WHY IT IS SEPARATE FROM "From": the "From" address is what the
        // provider requires to be a domain you own (so the email does not
        // look like spam). A "no-reply@" address is often the only thing you
        // can send from. Replying to a no-reply address would send the
        // reply into a black hole - so the replies are pointed somewhere else.
        //
        // Optional: when it is null, replies go to the From address.
        #endregion
        /// <summary>Where a reply to this email should go.</summary>
        public string? ReplyTo { get; init; }
    }
}
