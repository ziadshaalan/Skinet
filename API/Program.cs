using API.Middleware;
using API.SignalR;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

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
            builder.Services.AddScoped<ICartService, CartService>();
            builder.Services.AddScoped<IPaymentService, PaymentService>();
            builder.Services.AddSignalR();


            builder.Services.AddAuthorization();
            builder.Services.AddIdentityApiEndpoints<AppUser>().AddEntityFrameworkStores<StoreContext>();
            builder.Services.AddCors();



            var app = builder.Build();

            // Configure the HTTP request pipeline.
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
            .WithOrigins("http://localhost:4200", "https://localhost:4200"));
            // With that web browser will allow us to request the data from our API and display it on the page.
            //without it request can go to our API server but a browser secuirty feature will prevent us from loading the data into the browser.

            app.UseAuthentication();    // for signlaR
            app.UseAuthorization();

            app.UseDefaultFiles();  // Maps "/" to the default file (normally index.html) in wwwroot.
            app.UseStaticFiles();   // Actually serves those static files from wwwroot to the browser.



            app.MapControllers();
            app.MapGroup("api").MapIdentityApi<AppUser>();          // --> Endpoints at: /api/account/register, /api/login ...
            app.MapHub<NotificationHub>("/hub/notifications");      //"When a SignalR client connects to /hub/notifications, use my NotificationHub class to handle that connection."

            app.MapFallbackToController("Index", "Fallback");       // when /checkout requested it hits .net first => "ASP.NET Core doesn't know this route, so give Angular its index.html and let Angular decide which component it hits"

            try
            {
                using var scope = app.Services.CreateScope();     //"using" ensures that an object is automatically disposed (cleaned up) from memory when you're done with it.
                var services = scope.ServiceProvider;
                var context = services.GetRequiredService<StoreContext>();
                await context.Database.MigrateAsync();           // Applies pending EF Core migrations automatically at startup.

                await StoreContextSeed.SeedAsync(context);      // Seeds initial data if needed.


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
