using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Stripe;
using Stripe.V2;
using System.Reflection.Metadata.Ecma335;

namespace Infrastructure.Services
{
    public class PaymentService : IPaymentService   
    {
        private readonly ICartService cartService;
        private readonly IUnitOfWork unit;
        private readonly UserManager<AppUser> userManager;

        public PaymentService(IConfiguration config, ICartService cartService,
        IUnitOfWork unit, UserManager<AppUser> userManager)
        {
            this.cartService = cartService;
            this.unit = unit;
            this.userManager = userManager;
            StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
        }

        public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId, string email)
        {

            var cart = await cartService.GetCartAsync(cartId)
                ?? throw new Exception("Cart unavaliable");
           

            var stripeCustomerId = await GetOrCreateStripeCustomerId(email); // resolves the Stripe Customer for this user before creating the intent
                                                                             
            var shippingPrice = await GetShippingPriceAsync(cart) ?? 0m;

            await ValidateCartItemsInCartAsync(cart);

            var subtotal = CalculateSubTotal(cart);

            if (cart.Coupon != null)
            {
                subtotal = await ApplyDiscountAsync(cart.Coupon, subtotal); 
            }

            var total = subtotal + shippingPrice;

            var totalInCents = (long)Math.Round(total, MidpointRounding.AwayFromZero);


            await CreateUpdatePaymentIntentAsync(cart, totalInCents, stripeCustomerId);
            
            await cartService.SetCartAsync(cart);

            return cart;
        }

        public async Task<string> RefundPayment(string paymentIntentId)
        {
            var refundOptions = new RefundCreateOptions
            {
                PaymentIntent = paymentIntentId,
            };

            var refundService = new RefundService();
            var result = await refundService.CreateAsync(refundOptions);

            return result.Status;
        }

        private async Task CreateUpdatePaymentIntentAsync(ShoppingCart cart, long totalInCents, string stripeCustomerId)
        {
            var service = new PaymentIntentService();

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = totalInCents,
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
                    Amount = totalInCents
                };
                await service.UpdateAsync(cart.PaymentIntentId, options);
            }
        }

        private async Task<decimal> ApplyDiscountAsync(AppCoupon appCoupon, decimal subtotal)
        {
            var couponService = new Stripe.CouponService();

            var coupon = await couponService.GetAsync(appCoupon.CouponId);

            if (coupon.AmountOff.HasValue)
            {
                subtotal -= coupon.AmountOff.Value;
            }
            if (coupon.PercentOff.HasValue)
            {
                var discount = subtotal * (coupon.PercentOff.Value / 100m);
                subtotal -= discount;
            }

            return subtotal;
            
        }

        private decimal CalculateSubTotal(ShoppingCart cart)
        {
            var itemTotal = cart.Items.Sum(x => x.Quantity * (x.Price * 100m));
            return itemTotal;
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

        private async Task<decimal?> GetShippingPriceAsync(ShoppingCart cart)
        {
            if (cart.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync((int)cart.DeliveryMethodId)
                    ?? throw new Exception("Problem with delivery method");

                return deliveryMethod.Price * 100m;
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
