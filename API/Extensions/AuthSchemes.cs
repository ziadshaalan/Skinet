namespace API.Extensions
{
    #region Why a constant for scheme names
    // WHY A CONSTANT INSTEAD OF A STRING LITERAL: the scheme name has to be spelled
    // identically in Program.cs (where the scheme is registered) and in the controller
    // (where it is used). A typo in a literal would only fail at runtime with a
    // confusing "No authentication handler is configured" error, so the name lives
    // in exactly one place.
    //
    // WHAT IS THE EXTERNAL SCHEME: it is a short-lived cookie that only exists while
    // a user is in the middle of a social (Google) sign-in. The provider middleware
    // writes the provider's answer into it, our callback reads it once and then
    // deletes it - see AccountController.ExternalLoginCallback.
    #endregion
    /// <summary>Names of the authentication schemes this API registers itself.</summary>
    public static class AuthSchemes
    {
        /// <summary>
        /// Temporary cookie used to carry the social-provider result between
        /// the provider redirect and our callback endpoint.
        /// </summary>
        public const string External = "ExternalCookie";
    }
}
