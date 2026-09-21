using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Stripe;
using Stripe.V2;
using System.Reflection.Metadata.Ecma335;

namespace Infrastructure.Services
{
    public class PaymentService(IConfiguration config, ICartService cartService,
        IUnitOfWork unit, UserManager<AppUser> userManager) : IPaymentService   
    {
        public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId, string email)
        {
            StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];

            var cart = await cartService.GetCartAsync(cartId)
                ?? throw new Exception("Cart unavaliable");
           

            var stripeCustomerId = await GetOrCreateStripeCustomerId(email); // resolves the Stripe Customer for this user before creating the intent
                                                                             // 
            var shippingPrice = await GetShippingPriceAsync(cart) ?? 0;

            await ValidateCartItemsInCartAsync(cart);

            var subtotal = CalculateSubTotal(cart);

            if (cart.Coupon != null)
            {
                subtotal = await ApplyDiscountAsync(cart.Coupon, subtotal);
            }

            var total = subtotal + shippingPrice;

            await CreateUpdatePaymentIntentAsync(cart, total, stripeCustomerId);
            
            await cartService.SetCartAsync(cart);

            return cart;
        }

        private async Task CreateUpdatePaymentIntentAsync(ShoppingCart cart, long total, string stripeCustomerId)
        {
            var service = new PaymentIntentService();

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = total,
                    Currency = "usd",
                    PaymentMethodTypes = ["card"],
                    Customer = stripeCustomerId  // ties this payment to a real Stripe customer instead of leaving it as a guest

                };
                var intent = await service.CreateAsync(options);
                cart.PaymentIntentId = intent.Id;
                cart.ClientSecret = intent.ClientSecret;

            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = total
                };
                await service.UpdateAsync(cart.PaymentIntentId, options);
            }
        }

        private async Task<long> ApplyDiscountAsync(AppCoupon appCoupon, long subtotal)
        {
            var couponService = new Stripe.CouponService();

            var coupon = await couponService.GetAsync(appCoupon.CouponId);

            if (coupon.AmountOff.HasValue)
            {
                subtotal -= (long)coupon.AmountOff * 100;
            }
            if (coupon.PercentOff.HasValue)
            {
                var discount = subtotal * (coupon.PercentOff.Value / 100);
                subtotal -= (long)discount;
            }

            return subtotal;
            
        }

        private long CalculateSubTotal(ShoppingCart cart)
        {
           var itemTotal = cart.Items.Sum(x => x.Quantity * (x.Price * 100));
            return (long)itemTotal;
        }

        private async Task ValidateCartItemsInCartAsync(ShoppingCart cart)
        {

            foreach (var item in cart.Items)
            {
                var product = await unit.Repository<Core.Entities.Product>().GetByIdAsync(item.ProductId)
                    ?? throw new Exception("Problem getting product in cart");

                if (item.Quantity <= 0 || item.Quantity > product.QuantityInStock)
                    throw new Exception("Invalid quantity in cart");  // reject negative/zero/over-stock quantity to block cart total manipulation

                if (item.Price != product.Price)
                {
                    item.Price = product.Price;
                }
            }
        }

        private async Task<long?> GetShippingPriceAsync(ShoppingCart cart)
        {
            if (cart.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId)
                    ?? throw new Exception("Problem with delivery method");

                return (long)deliveryMethod.Price * 100;
            }

            return null;
        }

        // creates one Stripe customer per app user, reused on every future payment instead of duplicated
        private async Task<string> GetOrCreateStripeCustomerId(string email)
        {
            var user = await userManager.FindByEmailAsync(email);

            if (user == null) throw new Exception("Problem finding user");

            if (!string.IsNullOrEmpty(user.StripeCustomerId)) return user.StripeCustomerId; // already exists — reuse it, don't recreate


            var customerService = new CustomerService();
            var customer = await customerService.CreateAsync(new CustomerCreateOptions {
                Name = $"{user.FirstName} {user.LastName}",
                Email = email
            });

            user.StripeCustomerId = customer.Id;
            await userManager.UpdateAsync(user);    // persist so future payments reuse this same customer

            return customer.Id;

        }
    }
}
