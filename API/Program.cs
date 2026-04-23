using API.Middleware;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
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
            builder.Services.AddDbContext<StoreContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });
            // Registers EF Core DbContext with SQL Server connection from app settings.


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IProductRepository, ProductRepository>();
            builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));  //typeof keyword added bcus return type of these genrric files are unknown 
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

            app.UseCors( x => x
            .AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:4200", "https://localhost:4200"));
            // With that web browser will allow us to request the data from our API and display it on the page.
            //without it request can go to our API server but a browser secuirty feature will prevent us from loading the data into the browser.


            app.MapControllers();
            // Maps controller actions to endpoints.


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
