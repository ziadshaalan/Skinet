using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task SeedAsync(StoreContext context)
        {
            var path = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            // Gets the directory of the running .NET assembly so seed-data paths work in both development and the deployed application.

            if (!context.Products.Any())
            {
                var productsData = await File
                    .ReadAllTextAsync(path + @"/Data/SeedData/Products.json");
                var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                if (products == null) return;

                context.Products.AddRange(products);
                await context.SaveChangesAsync();
            }

            if (!context.DeliveryMethods.Any())
            {
                var dmData = await File.
                    ReadAllTextAsync(path + @"/Data/SeedData/Delivery.json");
                var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);
                if (methods == null) return;
                context.DeliveryMethods.AddRange(methods);
                await context.SaveChangesAsync();
            }
        }
    }
}
