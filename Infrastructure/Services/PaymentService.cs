using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Stripe;

namespace Infrastructure.Services
{
    public class PaymentService(IConfiguration config, ICartService cartService,
        IUnitOfWork unit, UserManager<AppUser> userManager) : IPaymentService   
    {
        public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId, string email)
        {
            StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];

            var cart = await cartService.GetCartAsync(cartId);
            if(cart == null) return null;

            var stripeCustomerId = await GetOrCreateStripeCustomerId(email);

            var shippingPrice = 0m;
            if (cart.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId);
                if (deliveryMethod == null) return null;

                shippingPrice = deliveryMethod.Price;
            }

            foreach (var item in cart.Items) 
            { 
                var product = await unit.Repository<Core.Entities.Product>().GetByIdAsync(item.ProductId);
                if (product == null) return null;
                var productPrice = product.Price;
                if (item.Price != product.Price)
                {
                    item.Price = product.Price;
                }
            }

            var service = new PaymentIntentService();
            PaymentIntent? intent = null;

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100)) + (long)(shippingPrice * 100),
                    Currency = "usd",
                    PaymentMethodTypes = ["card"],
                    Customer = stripeCustomerId

                };
                intent = await service.CreateAsync(options);
                cart.PaymentIntentId = intent.Id;
                cart.ClientSecret = intent.ClientSecret;

            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = (long)cart.Items.Sum(x => x.Quantity * (x.Price * 100)) + (long)(shippingPrice * 100),
                };
                intent = await service.UpdateAsync(cart.PaymentIntentId, options);
            }
            
            await cartService.SetCartAsync(cart);
            return cart;
        }

        private async Task<string> GetOrCreateStripeCustomerId(string email)
        {
            var user = await userManager.FindByEmailAsync(email);

            if (user == null) throw new Exception("Problem finding user");

            if (!string.IsNullOrEmpty(user.StripeCustomerId)) return user.StripeCustomerId;

            var customerService = new CustomerService();
            var customer = await customerService.CreateAsync(new CustomerCreateOptions {
                Name = $"{user.FirstName} {user.LastName}",
                Email = email,
            });

            user.StripeCustomerId = customer.Id;
            await userManager.UpdateAsync(user);

            return customer.Id;

        }
    }
}
