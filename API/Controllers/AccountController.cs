using API.DTOs;
using API.Extensions;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    #region Account controller overview
    // THE NEW SIGN-IN MODEL (email-first):
    //   The old app had two separate pages, /account/login and /account/register.
    //   Now there is ONE form. The user types an email, the API tells the form
    //   what to show next, and the form either asks for the password or asks for
    //   the details needed to create the account:
    //
    //     POST account/check-email  -> { exists, hasPassword, providers }
    //         exists = false              -> the form shows "create your account"
    //         exists = true, hasPassword  -> the form shows "type your password"
    //         exists = true, no password  -> the account came from a social
    //                                        provider (Google), so the
    //                                        form says "sign in with that provider"
    //
    //   That is the same idea Amazon/Google use: one field first, then the app
    //   figures out what the person needs.
    //
    // THE ENDPOINTS IN THIS FILE:
    //   POST account/login            - email + password sign in (rate limited)
    //   POST account/check-email      - "does this account exist?"
    //   POST account/register         - create an account (captcha protected)
    //   POST account/forgot-password  - send a reset link (never reveals if an account exists)
    //   POST account/reset-password   - use the token from that link
    //   POST account/logout           - sign out
    //   GET  account/user-info        - who am I
    //   GET  account/is-authenticated - am I signed in (no error when not)
    //   POST account/address          - save the delivery address
    //   GET  account/external-providers      - which social buttons to draw
    //   GET  account/external-login/{provider} - start a Google sign-in
    //   GET  account/external-callback        - finish a Google sign-in
    //
    // WHY SignInManager IS INJECTED: AddIdentityApiEndpoints in Program.cs registers
    // it automatically. It wraps UserManager (which reads/writes the AspNetUsers
    // table through StoreContext) and adds the cookie handling on top.
    #endregion
    /// <summary>Everything that has to do with "who is this person and how do they prove it".</summary>
    public class AccountController(
        SignInManager<AppUser> signInManager,
        ICaptchaService captcha,
        IEmailService emailService,
        IConfiguration config,
        IAuthenticationSchemeProvider schemes,
        ILogger<AccountController> logger,
        IHostEnvironment environment) : BaseApiController
    {
        // ---------------------------------------------------------------
        // 1) Sign in with email + password
        // ---------------------------------------------------------------

        #region Login endpoint protection
        // WHY THIS EXISTS INSTEAD OF THE BUILT-IN IDENTITY ENDPOINT:
        // ASP.NET Core's MapIdentityApi() also maps a POST /api/login, but it cannot
        // be rate limited or lock accounts out - and it also maps POST /api/register,
        // which creates accounts WITHOUT the captcha check (see Program.cs).
        // Owning the endpoint means we can protect it.
        //
        // THE TWO LAYERS OF PROTECTION:
        //   - the rate limiter ("login" policy) stops one IP from guessing hundreds
        //     of passwords in a row;
        //   - lockoutOnFailure stops one ACCOUNT from being attacked from many IPs.
        //   They solve different problems, so both are used.
        //
        // WHY CheckPasswordSignInAsync + SignInAsync instead of PasswordSignInAsync:
        // PasswordSignInAsync always creates a session cookie that dies with the
        // browser. Doing the check and the sign-in separately lets us choose
        // "remember me" (isPersistent: true) - the same behaviour as the register flow.
        #endregion
        /// <summary>Signs a user in with an email address and a password.</summary>
        [HttpPost("login")]
        [EnableRateLimiting("login")]
        public async Task<ActionResult> Login(LoginDto dto)
        {
            var user = await signInManager.UserManager.FindByEmailAsync(dto.Email);

            // Same answer for "no such user" and "wrong password", so the response
            // cannot be used to find out which emails are registered.
            if (user == null)
            {
                logger.LogInformation("Sign-in attempt for unknown email {Email}", dto.Email);
                return Unauthorized();
            }

            var result = await signInManager.CheckPasswordSignInAsync(
                user, dto.Password, lockoutOnFailure: true);

            if (result.IsLockedOut)
            {
                // 429 = "come back later". The client shows it as "too many attempts".
                logger.LogWarning("Account {Email} is locked out after too many failed sign-ins", dto.Email);
                return StatusCode(StatusCodes.Status429TooManyRequests);
            }

            if (!result.Succeeded)
            {
                logger.LogInformation("Failed sign-in for {Email}", dto.Email);
                return Unauthorized();
            }

            // Creates the .AspNetCore.Identity.Application cookie that every later
            // request carries. isPersistent: true = "keep me signed in".
            await signInManager.SignInAsync(user, isPersistent: true);

            return Ok();
        }

        // ---------------------------------------------------------------
        // 2) The email-first handshake
        // ---------------------------------------------------------------

        #region Email first handshake
        // hasPassword is false for accounts that were created through a social
        // provider (Google): those users signed in with a provider, not
        // with a password, so there is no password to type.
        //
        // providers lists the social providers the account is linked to. It is
        // empty for a normal (password) account. The form uses it to say exactly
        // which button to press - "you created this account with Google" - instead
        // of a vague "use the provider you signed up with".
        //
        // DELIBERATE TRADE-OFF: this endpoint does reveal whether an email is
        // registered. That is unavoidable for an email-first flow - the app cannot
        // ask for a password without knowing whether there is an account. It is
        // rate limited ("auth" policy) to make bulk harvesting expensive.
        // The password reset endpoint below deliberately does NOT leak this.
        #endregion
        /// <summary>Tells the Angular form which step to show next: password (the account exists) or create-account (it does not).</summary>
        [HttpPost("check-email")]
        [EnableRateLimiting("auth")]
        public async Task<ActionResult> CheckEmail(CheckEmailDto dto)
        {
            var user = await signInManager.UserManager.FindByEmailAsync(dto.Email);

            // The social logins stored in AspNetUserLogins ("Google").
            // GetLoginsAsync returns them only for a user that actually exists.
            var providers = user == null
                ? Array.Empty<string>()
                : (await signInManager.UserManager.GetLoginsAsync(user))
                    .Select(login => login.LoginProvider)
                    .ToArray();

            return Ok(new
            {
                exists = user != null,
                hasPassword = user != null && await signInManager.UserManager.HasPasswordAsync(user),
                providers
            });
        }

        #region Registration flow steps
        // THE FLOW:
        //   1. The captcha token is verified with Cloudflare (the browser token alone
        //      is worthless, only Cloudflare's answer counts).
        //   2. The user row is created with a hashed password.
        //   3. The user is signed in straight away - no "check your inbox" step,
        //      because the account is only created from the email the person typed,
        //      which they obviously own.
        //
        // WHY THE CAPTCHA IS MANDATORY: without it a bot could create thousands of
        // accounts and then use "forgot password" to send thousands of emails.
        #endregion
        /// <summary>Creates a new account.</summary>
        [HttpPost("register")]
        [EnableRateLimiting("auth")]
        public async Task<ActionResult> Register(RegisterDto registerDto)
        {
            // Verified server-side with Cloudflare; a token from the browser proves nothing by itself.
            if (!await captcha.VerifyAsync(registerDto.CaptchaToken))
            {
                ModelState.AddModelError("captcha", "Captcha verification failed");
                return ValidationProblem();
            }

            var user = new AppUser
            {
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Email = registerDto.Email,
                UserName = registerDto.Email,
                MarketingOptIn = registerDto.MarketingOptIn
            };

            var result = await signInManager.UserManager.CreateAsync(user, registerDto.Password); /// CreateAsync returns IdentityResult: Succeeded (bool) + Errors
                                                                                                  // (list of Code/Description) built internally by Identity's validators
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);    // // Copy each Identity error (Code + Description) into ASP.NET's
                                                                                // built-in ModelState — the same bucket used for [Required] etc.
                }


                return ValidationProblem();      // Reads ModelState → returns standardized RFC 9110 Problem Details JSON.
            }

            // No confirmation email: the new user is signed in right away (creates the login cookie).
            await signInManager.SignInAsync(user, isPersistent: true);

            return Ok();
        }

        // ---------------------------------------------------------------
        // 3) Forgot / reset password
        // ---------------------------------------------------------------

        #region Password reset by email
        // ALWAYS ANSWERS 200, whether or not the account exists, so this endpoint
        // cannot be used to find out who is registered. If the address is unknown,
        // nothing is sent and nothing is revealed.
        //
        // WHY THE TOKEN IS ENCODED: Identity tokens contain characters (+, /, =)
        // that are not safe in a URL. WebEncoders.Base64UrlEncode turns them into
        // a URL-safe string, and the reset endpoint decodes it again.
        //
        // NOTE ON THE 24 HOURS: that matches Identity's default token lifetime
        // (TokenOptions.DefaultTokenLifespan = 1 day).
        //
        // WHY THIS ONLY RUNS IN DEVELOPMENT: sending real mail needs a sender
        // address on a domain that was verified with the email provider. There is
        // no such domain yet, so in production every send would fail - and a page
        // that promises "we sent you a link" while nothing arrives is worse than
        // no page at all. The Angular app hides the "Forgot password?" link in
        // production for the same reason (environment.emailEnabled).
        #endregion
        /// <summary>Starts the "I forgot my password" flow: generates a one-time token and emails a link that contains it.</summary>
        [HttpPost("forgot-password")]
        [EnableRateLimiting("auth")]
        public async Task<ActionResult> ForgotPassword(ForgotPasswordDto dto)
        {
            // The feature is off outside development. The answer is still 200,
            // because a different answer would reveal which emails are registered.
            if (!environment.IsDevelopment())
            {
                logger.LogWarning("Password reset by email is disabled outside Development - nothing was sent.");
                return Ok();
            }

            var user = await signInManager.UserManager.FindByEmailAsync(dto.Email);

            if (user != null)
            {
                var token = await signInManager.UserManager.GeneratePasswordResetTokenAsync(user);
                var encodedToken = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(token));   // URL-safe

                var link = $"{config["App:BaseUrl"]}/account/reset-password" +
                           $"?email={Uri.EscapeDataString(user.Email!)}&token={encodedToken}";

                try
                {
                    // The template builds the whole message (subject, HTML body and
                    // plain-text body); the service only has to hand it to Resend.
                    var message = EmailTemplates.PasswordReset(user.Email!, user.FirstName, link);

                    // A reply to a no-reply@ address would disappear, so the
                    // configured "Email:ReplyTo" is used when there is one.
                    await emailService.SendAsync(message);
                }
                catch (Exception ex)
                {
                    // The email provider is down, misconfigured, or the API key is missing.
                    // We still answer 200 (the caller must not learn whether the account
                    // exists), but we log it loudly so the problem is visible.
                    logger.LogError(ex, "Could not send the password reset email to {Email}", user.Email);
                }

                #region Development reset link logging
                // In development the reset link is printed to the console, so the flow
                // can be walked through without a Resend account.
                //
                // It is printed whether the email was sent or NOT - that way a
                // developer can always finish the flow, and can also see at a
                // glance in the log whether the send worked or failed.
                #endregion
                if (environment.IsDevelopment())
                {
                    logger.LogWarning("Development reset link for {Email}: {Link}", user.Email, link);
                }
            }

            return Ok();
        }

        #region Password reset token handling
        // WHY THE TOKEN IS DECODED HERE: the link carried a URL-safe base64 string;
        // Identity expects the raw token, so it is decoded before being handed over.
        //
        // WHY THE EMAIL IS CONFIRMED AFTERWARDS: opening the emailed link proves the
        // person owns that inbox. That is the same proof an email confirmation would
        // give, so the account is marked as confirmed at the same time.
        //
        // WHY A NEW PASSWORD INVALIDATES OLD SESSIONS: ResetPasswordAsync updates
        // the security stamp, and the cookie middleware compares the stamp on every
        // request - so anybody who was signed in with the old password is signed out.
        #endregion
        /// <summary>Finishes the "I forgot my password" flow: the token from the emailed link is checked and the password is replaced.</summary>
        [HttpPost("reset-password")]
        [EnableRateLimiting("auth")]
        public async Task<ActionResult> ResetPassword(ResetPasswordDto dto)
        {
            var user = await signInManager.UserManager.FindByEmailAsync(dto.Email);

            if (user == null)
            {
                ModelState.AddModelError("token", "Invalid or expired link");
                return ValidationProblem();
            }

            string token;
            try
            {
                token = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(dto.Token));
            }
            catch (FormatException)
            {
                // The link was truncated or mangled (for example by an email client
                // that wrapped the line). Same answer as a wrong token.
                ModelState.AddModelError("token", "Invalid or expired link");
                return ValidationProblem();
            }

            var result = await signInManager.UserManager.ResetPasswordAsync(user, token, dto.NewPassword);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            // Receiving the emailed link proves the person owns this inbox.
            if (!user.EmailConfirmed)
            {
                user.EmailConfirmed = true;
                await signInManager.UserManager.UpdateAsync(user);
            }

            return Ok();
        }


        // [Authorize] runs BEFORE this method executes — blocks with 401
        // automatically if no valid cookie is sent. Method body only runs
        // for already-authenticated users, so no manual check needed here.

        [Authorize]
        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            await signInManager.SignOutAsync();

            return NoContent();

        }

        // NO [Authorize] here on purpose — this endpoint must work even when
        // NOT logged in, so Angular can call it blindly on app load without
        // getting a 401 "error" for a perfectly normal "not logged in" state.

        [HttpGet("user-info")]
        public async Task<ActionResult> GetUserInfo()
        {
            // Manual check (replaces [Authorize]) — if not authenticated,
            // return empty 204 instead of letting it look like an error.
            if (User.Identity?.IsAuthenticated == false) return NoContent();


            // The helper throws an AuthenticationException when the user cannot be
            // found, so it never really returns null - the check below is only a
            // safety net.
            var user = await signInManager.UserManager.GetUserByEmailWithAddress(User);        // ==> an extension made for UserManager class


            if (user == null) return Unauthorized();


            // Anonymous object = mini inline DTO — only exposes safe fields,
            // never PasswordHash/SecurityStamp/etc.
            return Ok(new
            {
                user.FirstName,
                user.LastName,
                user.Email,
                Address = user.Address?.ToDto(),     // explicit name needed — result of a method call, not a bare property
                Roles = User.FindFirstValue(ClaimTypes.Role)
            });

        }

        // Always returns 200 — "false" is a valid, non-error answer to
        // "are you logged in?". Lets Angular read a plain boolean without
        // needing try/catch just to check auth state.

        [HttpGet("is-authenticated")]
        public ActionResult GetAuthState()
        {
            // No DB call — just reads the flag already set by auth middleware.

            return Ok(new { IsAuthenticated = User.Identity?.IsAuthenticated ?? false });
        }


        [Authorize]
        [HttpPost("address")]
        public async Task<ActionResult<Address>> CreateOrUpdateAddress(AddressDto addressDto)
        {
            // Loads user + their Address (Include) so we can check if one exists.
            // [Authorize] above makes sure the caller is really signed in:
            // without it the helper below would throw (no email claim in the
            // cookie) and the request would end as a 500 instead of a 401.
            var user = await signInManager.UserManager.GetUserByEmailWithAddress(User); // Extension methods handle Entity <-> DTO mapping (keeps controller clean):

            if (user.Address == null)
            {
                user.Address = addressDto.ToEntity();   // CREATE: new object, DTO → Entity
            }
            else
            {
                user.Address.UpdateFromDto(addressDto); // UPDATE: mutate existing tracked entity


            }

            var result = await signInManager.UserManager.UpdateAsync(user);

            if (!result.Succeeded) return BadRequest("Problem updating user address");

            return Ok(user.Address.ToDto());    // Entity → DTO before returning to client
        }


        // ---------------------------------------------------------------
        // Social login (Google; Apple and others are added the same way)
        // ---------------------------------------------------------------

        #region Social provider mapping
        // KEY (lowercase)  = the name in the URL, e.g. /account/external-login/google
        // VALUE (scheme)   = the ASP.NET Core authentication scheme name
        //
        // WHY BOTH: the URL should look friendly ("google"), while Identity stores
        // the provider under the scheme name ("Google") in the AspNetUserLogins
        // table. The scheme is what AddGoogle() registered in Program.cs.
        //
        // HOW TO ADD ANOTHER PROVIDER (Apple, Microsoft, ...):
        //   1. dotnet add API package Microsoft.AspNetCore.Authentication.&lt;Provider&gt;
        //   2. In Program.cs: authBuilder.Add&lt;Provider&gt;(options => { options.SignInScheme = AuthSchemes.External; ... })
        //      and add the client id/secret to appsettings.
        //   3. Here: add ["&lt;name&gt;"] = "&lt;Provider&gt;" to this dictionary.
        // That is all - the button appears in the Angular form automatically,
        // because the form asks the API which providers are configured.
        #endregion
        /// <summary>The social providers this API knows about.</summary>
        private static readonly Dictionary<string, string> ExternalProviders =
            new(StringComparer.OrdinalIgnoreCase)
            {
                ["google"] = "Google"
            };

        #region Only configured providers
        // WHY ASK THE API: a provider is only usable when its client id/secret are
        // present in the configuration. If Google is not configured on this server,
        // the button should not be drawn at all - a dead button is worse than
        // no button.
        #endregion
        /// <summary>Lists only the providers that are actually configured, so Angular draws buttons that work.</summary>
        [HttpGet("external-providers")]
        public async Task<ActionResult<string[]>> GetExternalProviders()
        {
            var configured = new List<string>();
            foreach (var scheme in ExternalProviders.Values)
            {
                if (await schemes.GetSchemeAsync(scheme) != null) configured.Add(scheme);
            }
            return Ok(configured);
        }

        #region Social sign-in round trip
        // THE FULL ROUND TRIP:
        //   browser -> /account/external-login/google   (this method)
        //           -> Challenge() sends the browser to accounts.google.com
        //           -> the person signs in / picks an account at Google
        //           -> Google calls back /signin-google (the provider middleware)
        //              which validates the answer and writes it into the temporary
        //              "ExternalCookie" scheme
        //           -> the middleware redirects to the RedirectUri we set below,
        //              which is /account/external-callback
        //           -> ExternalLoginCallback finishes the job
        //
        // WHY returnUrl IS CARRIED IN THE REDIRECT URI: the person has to end up
        // back where they started (e.g. the checkout page), not always on the shop.
        #endregion
        /// <summary>Called by a full-page browser navigation (not an XHR) - redirects to the provider.</summary>
        [HttpGet("external-login/{provider}")]
        [EnableRateLimiting("auth")]
        public async Task<IActionResult> ExternalLogin(string provider, string? returnUrl)
        {
            if (!ExternalProviders.TryGetValue(provider, out var scheme)
                || await schemes.GetSchemeAsync(scheme) == null)
            {
                return NotFound();
            }

            var props = new AuthenticationProperties
            {
                RedirectUri = Url.Action(nameof(ExternalLoginCallback), "Account", new { returnUrl })
            };
            props.Items["LoginProvider"] = scheme;      // survives the round trip to the provider

            return Challenge(props, scheme);
        }

        #region Social callback outcomes
        // THE THREE POSSIBLE OUTCOMES:
        //   1. This provider account is already linked to one of our users -> sign in.
        //   2. The provider gave us an email that matches an existing account
        //      -> link the provider to that account and sign in.
        //   3. The provider gave us an email we have never seen -> create the account
        //      (without a password) and sign in.
        //
        // WHY CASE 2 IS SAFE: the provider has verified that email (that is what
        // "sign in with Google" means), so linking it to the account with the same
        // email does not give anybody access to somebody else's account.
        //
        // WHY THE NEW USER HAS NO PASSWORD: CreateAsync(user) without a password
        // leaves the account password-less. That is on purpose - the person proved
        // who they are through the provider, so no password is needed. The login
        // form notices this (HasPasswordAsync returns false) and tells the person
        // to sign in with the very same provider they used the first time.
        #endregion
        /// <summary>The provider middleware (/signin-google) validates the response, stores the result in the temporary external cookie, then redirects here.</summary>
        [HttpGet("external-callback")]
        public async Task<IActionResult> ExternalLoginCallback(string? returnUrl)
        {
            var result = await HttpContext.AuthenticateAsync(AuthSchemes.External);
            if (!result.Succeeded || result.Principal == null) return ExternalLoginFailed("failed");

            var provider = result.Properties?.Items["LoginProvider"];
            var providerKey = result.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
            var email = result.Principal.FindFirstValue(ClaimTypes.Email);
            if (provider == null || providerKey == null) return ExternalLoginFailed("failed");

            var userManager = signInManager.UserManager;

            // 1) Already linked to this provider account?
            var user = await userManager.FindByLoginAsync(provider, providerKey);

            if (user == null)
            {
                if (string.IsNullOrEmpty(email)) return ExternalLoginFailed("no-email");

                // 2) Same email as an existing account? Link to it. Otherwise create a new user.
                user = await userManager.FindByEmailAsync(email);

                if (user == null)
                {
                    user = new AppUser
                    {
                        Email = email,
                        UserName = email,
                        FirstName = result.Principal.FindFirstValue(ClaimTypes.GivenName),
                        LastName = result.Principal.FindFirstValue(ClaimTypes.Surname),
                        EmailConfirmed = true      // the provider verified it; no password, no marketing opt-in
                    };
                    if (!(await userManager.CreateAsync(user)).Succeeded) return ExternalLoginFailed("failed");
                }

                var login = new UserLoginInfo(provider, providerKey, provider);   // saved in AspNetUserLogins
                if (!(await userManager.AddLoginAsync(user, login)).Succeeded) return ExternalLoginFailed("failed");
            }

            await HttpContext.SignOutAsync(AuthSchemes.External);   // delete the temporary cookie
            await signInManager.SignInAsync(user, isPersistent: true);

            return Redirect(ClientUrl(returnUrl));
        }

        /// <summary>
        /// Sends the browser back to the login page with a reason in the query string.
        /// The Angular form reads that reason and shows a friendly message.
        /// </summary>
        private IActionResult ExternalLoginFailed(string reason) =>
            Redirect(ClientUrl("/account/login") + "?error=" + reason);

        #region Safe return url handling
        // WHY Url.IsLocalUrl: without this check somebody could hand a victim a link
        // like /account/external-login/google?returnUrl=https://evil.com and the
        // user would be redirected to that site after signing in (an open redirect).
        // IsLocalUrl only allows paths that stay inside this app.
        #endregion
        /// <summary>Builds a link back to the Angular app.</summary>
        private string ClientUrl(string? path)
        {
            // only local paths like /checkout are allowed, which blocks open redirects
            var safePath = !string.IsNullOrEmpty(path) && Url.IsLocalUrl(path) ? path : "/shop";
            return config["App:BaseUrl"] + safePath;
        }

    }
}
