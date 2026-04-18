using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class ProductRepository(StoreContext context) : IProductRepository   //Primary constructor used for injecting storecontext
    {



        public void AddProduct(Product product)
        {
            context.Products.Add(product);
        }

        public void DeleteProduct(Product product)
        {
           context.Products.Remove(product);
        }

       

        public async Task<Product?> GetProductByIdAsync(int id)
        {
            return await context.Products.FindAsync(id);
        }



        public async Task<IReadOnlyList<Product>> GetProductsAsync(string? brand, string? type, string? sort)   //api/products?sort=priceAsc
        {
            var query = context.Products.AsQueryable();     // defers DB execution — allows conditional query building before hitting the database

            if (!string.IsNullOrWhiteSpace(brand))
            {
                query = query.Where(x => x.Brand == brand);
            }
            if (!string.IsNullOrWhiteSpace(type))
            {
                query = query.Where(x => x.Type == type);
            }
            //case "priceAsc":
            //query = query.OrderBy(x => x.Price);
            //break;

            query = sort switch                             //Assigning the result of the switch expression to query.
            {                                                                                 
                 "priceAsc" => query.OrderBy(x => x.Price),
                 "priceDesc" => query.OrderByDescending(x => x.Price),                 
                 _ => query.OrderBy(x => x.Name) //"_" default case
            };

            return await query.ToListAsync();
        }


        public async Task<IReadOnlyList<string>> GetBrandsAsync()
        {
            return await context.Products.Select(x => x.Brand)     //Projection - Maps each Product object to one of its properties, transforming a collection of objects into strings or values
                .Distinct()     //Removes duplicates.
                .ToListAsync();

        }

        public async Task<IReadOnlyList<string>> GetTypesAsync()
        {
            return await context.Products.Select(x => x.Type)
                .Distinct()
                .ToListAsync();
        }


        public bool ProductExists(int id)
        {
           return  context.Products.Any(x => x.Id == id);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void UpdateProduct(Product product)
        {
           context.Entry(product).State = EntityState.Modified;     /* --> Marks entire entity as modified — EF will UPDATE all columns 
                                                                     --> Does NOT track navigation properties*/
        }



        //context.Update(product);
        // Same result but also marks navigation properties as modified
        // More aggressive — use when product has related entities to update too
    }
}
//---> context.Attach(product);
//context.Entry(product).Property(p => p.Price).IsModified = true;
// Attaches untracked entity then marks only specific properties as modified
// EF will UPDATE only marked columns — use for PATCH (partial update)
