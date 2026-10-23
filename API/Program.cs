using API.Extensions;
using API.Middleware;
using API.SignalR;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using System.Threading.RateLimiting;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            // -------------------------------------------------------------------
            // Trusted proxies
            // -------------------------------------------------------------------
            #region Trusted proxy headers
            // On Azure App Service the socket address belongs to the platform proxy,
            // not to the visitor. Without the forwarded headers every visitor would
            // share one rate-limit bucket (and the bucket would be the proxy's IP).
            //
            // KnownNetworks/KnownProxies are cleared on purpose: the app only ever runs
            // behind the platform proxy, and the platform overwrites the
            // X-Forwarded-For header, so a visitor cannot fake its own address.
            #endregion
            builder.Services.Configure<ForwardedHeadersOptions>(options =>
            {
                options.ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
                options.KnownNetworks.Clear();
                options.KnownProxies.Clear();
            });

            builder.Services.AddControllers();
            // Registers EF Core DbContext with SQL Server connection from app settings.
            builder.Services.AddDbContext<StoreContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
                    sqlOptions => sqlOptions.EnableRetryOnFailure(
                        maxRetryCount: 5,
                        maxRetryDelay: TimeSpan.FromSeconds(10),
                        errorNumbersToAdd: null));
            });

            // Redis registration
            builder.Services.AddSingleton<IConnectionMultiplexer>(config =>
            {
                var connString = builder.Configuration.GetConnectionString("Redis");
                if (connString == null) throw new Exception("Cannot get redis connection string");
                var configuration = ConfigurationOptions.Parse(connString, true);
                return ConnectionMultiplexer.Connect(configuration);
            });


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IProductRepository, ProductRepository>();
            builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));  //typeof keyword added bcus return type of these genrric files are unknown
            builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
            builder.Services.AddScoped<IPaymentService, PaymentService>();
            builder.Services.AddScoped<ICouponService, CouponService>();

            // -------------------------------------------------------------------
            // Captcha (Cloudflare Turnstile) and email (Resend)
            // -------------------------------------------------------------------
            #region Typed HttpClient registration
            // AddHttpClient<TInterface, TImplementation> registers a TYPED client:
            // the framework creates the implementation, injects an HttpClient that
            // handles connection pooling and DNS refresh for us, and gives it a
            // lifetime shorter than the app so a broken connection cannot stick
            // around forever. Creating a new HttpClient inside a request is the
            // classic cause of socket exhaustion.
            #endregion
            builder.Services.AddHttpClient<ICaptchaService, TurnstileCaptchaService>(client =>
                client.Timeout = TimeSpan.FromSeconds(10));   // a captcha check must be fast

            #region Email provider timeout
            // The email client is the Resend provider. The 20 second timeout is
            // the maximum the "forgot password" request may take - a slow email
            // provider must not hold the user's browser open forever. When the
            // timeout is hit the send fails, the error is logged and the
            // endpoint still answers 200 (see AccountController.ForgotPassword).
            #endregion
            builder.Services.AddHttpClient<IEmailService, ResendEmailService>(client =>
                client.Timeout = TimeSpan.FromSeconds(20));   // talking to an email provider takes a moment

            builder.Services.AddSignalR();
            builder.Services.AddScoped<ICartService, CartService>();
            builder.Services.AddSingleton<IResponseCacheService, ResponseCache>();  //Create one ResponseCache instance and reuse that same instance whenever IResponseCacheService is requested.

            // -------------------------------------------------------------------
            // Rate limiting
            // -------------------------------------------------------------------
            #region Rate limit policies
            // WHY: without a limit, one script could hammer the sign-in, register or
            // password-reset endpoints all day - guessing passwords, creating fake
            // accounts or flooding somebody's inbox with reset emails.
            //
            // HOW IT WORKS: a "policy" is a named rule. An endpoint opts in with
            // [EnableRateLimiting("policyName")] and the middleware rejects the
            // request with HTTP 429 once the budget for that key is used up.
            //
            // The partition key decides who shares a budget:
            //   - "auth"  : IP address + endpoint path, so one noisy endpoint cannot
            //                use up the budget of another.
            //   - "login" : IP address only, because password guessing is the threat
            //                that matters and it should share one small budget.
            #endregion
            builder.Services.AddRateLimiter(options =>
            {
                options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;

                // Tell the client how long to wait, so it can say something useful
                // instead of a bare "429".
                options.OnRejected = async (context, cancellationToken) =>
                {
                    context.HttpContext.Response.Headers.RetryAfter = "60";
                    await context.HttpContext.Response.WriteAsync("Too many requests. Please try again shortly.");
                };

                options.AddPolicy("auth", context => RateLimitPartition.GetFixedWindowLimiter(
                    $"{context.Connection.RemoteIpAddress?.ToString() ?? "unknown"}|{context.Request.Path}",
                    _ => new FixedWindowRateLimiterOptions
                    {
                        PermitLimit = 10,
                        Window = TimeSpan.FromMinutes(1),
                        QueueLimit = 0      // no waiting room: extra requests are rejected immediately
                    }));

                options.AddPolicy("login", context => RateLimitPartition.GetFixedWindowLimiter(
                    context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
                    _ => new FixedWindowRateLimiterOptions
                    {
                        PermitLimit = 10,
                        Window = TimeSpan.FromMinutes(5),
                        QueueLimit = 0
                    }));

                // Creates Stripe objects without a login, so the budget is small
                options.AddPolicy("payment-intent", context => RateLimitPartition.GetFixedWindowLimiter(
                    context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
                    _ => new FixedWindowRateLimiterOptions
                    {
                        PermitLimit = 20,
                        Window = TimeSpan.FromMinutes(1),
                        QueueLimit = 0
                    }));

                // Guest order creation plus the success-page polling (one request every ~2 seconds)
                options.AddPolicy("guest-order", context => RateLimitPartition.GetFixedWindowLimiter(
                    context.Connection.RemoteIpAddress?.ToString() ?? "unknown",
                    _ => new FixedWindowRateLimiterOptions
                    {
                        PermitLimit = 60,
                        Window = TimeSpan.FromMinutes(1),
                        QueueLimit = 0
                    }));
            });


            builder.Services.AddAuthorization();


            // -------------------------------------------------------------------
            // Identity + authentication
            // -------------------------------------------------------------------
            // AddIdentityApiEndpoints registers everything Identity needs:
            // UserManager, SignInManager, the password hasher, the security-stamp
            // validator and the authentication schemes (the application cookie that
            // keeps a signed-in user signed in).
            builder.Services.AddIdentityApiEndpoints<AppUser>()
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<StoreContext>();

            // AddAuthentication() returns a builder we can add schemes to.
            // Calling it without a scheme name does NOT change the defaults that
            // AddIdentityApiEndpoints just set, it only gives us a handle.
            var authBuilder = builder.Services.AddAuthentication()

                // The temporary cookie used during a social sign-in. It only lives for
                // a few minutes and is deleted as soon as the callback has read it.
                .AddCookie(AuthSchemes.External, options =>
                {
                    options.Cookie.Name = ".Skinet.External";
                    options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
                    options.Cookie.HttpOnly = true;
                    options.Cookie.SameSite = SameSiteMode.None;   // the provider redirects back in a cross-site POST
                    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                });

            #region Google sign-in setup
            // Google is only registered when it is actually configured. Without this
            // check the app would start with a Google scheme that has no client id,
            // and every social sign-in would fail with a confusing error.
            //
            // Config: Authentication:Google:ClientId + Authentication:Google:ClientSecret
            //
            // SignInScheme tells the Google middleware where to park its answer:
            // the temporary "ExternalCookie" scheme, NOT the application cookie.
            // The application cookie is only issued by our own callback, once we
            // know who the person is.
            #endregion
            var googleClientId = builder.Configuration["Authentication:Google:ClientId"];
            if (!string.IsNullOrEmpty(googleClientId))
            {
                authBuilder.AddGoogle(options =>
                {
                    options.SignInScheme = AuthSchemes.External;
                    options.ClientId = googleClientId;
                    options.ClientSecret = builder.Configuration["Authentication:Google:ClientSecret"]!;
                    options.CallbackPath = "/signin-google";   // must be registered in the Google console
                });
            }

            builder.Services.AddCors();



            var app = builder.Build();

            // Configure the HTTP request pipeline.

            // Behind Azure App Service (or any reverse proxy) the socket address is the
            // proxy's, not the visitor's. Forwarded headers restore the real client IP,
            // which the rate limiter uses as its partition key. This has to be the
            // FIRST middleware, before anything reads RemoteIpAddress.
            app.UseForwardedHeaders();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseMiddleware<ExceptionMiddleware>();
            // Global exception middleware should be early in pipeline to catch downstream exceptions.

            app.UseCors(x => x
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
            .WithOrigins(
            "http://localhost:4200",
            "https://localhost:4200",
            "http://192.168.1.7:4200"));

            // With that web browser will allow us to request the data from our API and display it on the page.
            //without it request can go to our API server but a browser secuirty feature will prevent us from loading the data into the browser.

            app.UseAuthentication();    // for signlaR
            app.UseAuthorization();

            app.UseDefaultFiles();  // Maps "/" to the default file (normally index.html) in wwwroot.
            app.UseStaticFiles();   // Actually serves those static files from wwwroot to the browser.

            // Runs AFTER UseRouting (which the framework adds automatically) so that
            // [EnableRateLimiting] on a single endpoint is picked up.
            app.UseRateLimiter();

            app.MapControllers();

            #region Identity endpoints not mapped
            // IMPORTANT: the built-in Identity API (app.MapGroup("api").MapIdentityApi<AppUser>())
            // is deliberately NOT mapped.
            // It would expose POST /api/register, which creates an account WITHOUT the
            // captcha check that AccountController.Register enforces - an open door around
            // the bot protection - plus a second, duplicate password-reset endpoint.
            // Everything the client needs (login, register, logout) lives in AccountController.
            // The Identity SERVICES (AddIdentityApiEndpoints above) are still registered,
            // because SignInManager and the application cookie come from there.
            #endregion

            app.MapHub<NotificationHub>("/hub/notifications");      //"When a SignalR client connects to /hub/notifications, use my NotificationHub class to handle that connection."

            app.MapFallbackToController("Index", "Fallback");       // when /checkout requested it hits .net first => "ASP.NET Core doesn't know this route, so give Angular its index.html and let Angular decide which component it hits"




            #region Startup initialization scope
            // Startup initialization:
            // Create a DI scope because StoreContext and UserManager are scoped services,
            // and this code runs during application startup, outside of a normal HTTP request.
            // This scope lets us safely resolve them from DI, then apply migrations, seed data,
            // and create the default admin user if it does not already exist.
            #endregion
            try
            {
                using var scope = app.Services.CreateScope();     //"using" ensures that an object is automatically disposed (cleaned up) from memory when you're done with it.
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<StoreContext>();
                var userManager = services.GetRequiredService<UserManager<AppUser>>();
                await context.Database.MigrateAsync();           // Applies pending EF Core migrations automatically at startup.
                await StoreContextSeed.SeedAsync(context, userManager);      // Seeds initial data if needed.


            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }

         

            app.Run();
        }
    }
}
