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

        // isGuest = true means no AppUser exists, so the Stripe customer lookup is skipped
        public async Task<ShoppingCart?> CreateOrUpdatePaymentIntent(string cartId, string email, bool isGuest)
        {

            var cart = await cartService.GetCartAsync(cartId)
                ?? throw new Exception("Cart unavaliable");


            // signed-in user: resolve (or create) their Stripe Customer; guest: no customer at all
            //Why: GetOrCreateStripeCustomerId calls userManager.FindByEmailAsync(email) and throws “Problem finding user” when nothing is found. A guest has no account, so without this change every guest payment would fail. The type is string? because guests now get null.
            string? stripeCustomerId = isGuest ? null : await GetOrCreateStripeCustomerId(email);       

            var shippingPrice = await GetShippingPriceAsync(cart) ?? 0m;

            await ValidateCartItemsInCartAsync(cart);

            var subtotal = CalculateSubTotal(cart);

            if (cart.Coupon != null)
            {
                subtotal = await ApplyDiscountAsync(cart.Coupon, subtotal);
            }

            var total = subtotal + shippingPrice;

            var totalInCents = (long)Math.Round(total, MidpointRounding.AwayFromZero);


            await CreateUpdatePaymentIntentAsync(cart, totalInCents, stripeCustomerId, email);

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

        // stripeCustomerId is null for guests; their email goes into metadata so the payment can be identified in the Stripe dashboard
        private async Task CreateUpdatePaymentIntentAsync(ShoppingCart cart, long totalInCents, string? stripeCustomerId, string email)
        {
            var service = new PaymentIntentService();

            if (string.IsNullOrEmpty(cart.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = totalInCents,
                    Currency = "usd",
                    PaymentMethodTypes = ["card"],
                    Customer = stripeCustomerId  // signed-in: ties the payment to their Stripe customer; guest: null, so Stripe creates no customer

                };


                //Why the metadata: A guest payment has no customer in Stripe, so nothing in the dashboard would say who paid. The guest_email metadata fixes that. It is stored on Stripe only and never emailed. The email parameter exists only to feed this line.
                if (stripeCustomerId == null)
                {
                    options.Metadata = new Dictionary<string, string> { ["guest_email"] = email };
                }

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
            var customer = await customerService.CreateAsync(new CustomerCreateOptions
            {
                Name = $"{user.FirstName} {user.LastName}",
                Email = email
            });

            user.StripeCustomerId = customer.Id;
            await userManager.UpdateAsync(user);    // persist so future payments reuse this same customer

            return customer.Id;

        }


    }
}