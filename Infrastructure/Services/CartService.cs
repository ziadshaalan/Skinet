using Core.Interfaces;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StackExchange.Redis;
using System.Text.Json;

namespace Infrastructure.Services
{
    public class CartService(IConnectionMultiplexer redis) : ICartService
    {
        public readonly IDatabase _database = redis.GetDatabase();
        public async Task<ShoppingCart?> GetCartAsync(string key)
        {
            // Implementation for retrieving the shopping cart from the database or cache
            var data = await _database.StringGetAsync(key);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<ShoppingCart>(data!);
        }

        public async Task<ShoppingCart?> SetCartAsync(ShoppingCart cart)
        {
            // Implementation for setting the shopping cart in the database or cache
            var created = await _database.StringSetAsync(cart.Id, JsonSerializer.Serialize(cart),
                expiry: TimeSpan.FromDays(30));
            if (!created) return null!;

            return await GetCartAsync(cart.Id);
        }

        public async Task<bool> DeleteCartAsync(string key)
        {
            // Implementation for deleting the shopping cart from the database or cache
            return await _database.KeyDeleteAsync(key);
        }
    }
}
