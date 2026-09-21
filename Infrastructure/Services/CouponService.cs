using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class CouponService : ICouponService
    {
        public CouponService(IConfiguration config) 
        {
            StripeConfiguration.ApiKey = config["StripeSettings:SecretKey"];
        }
    
        public async Task<AppCoupon?> GetCouponFromPromoCode(string code)
        {
            var promotionService = new PromotionCodeService();

            var options = new PromotionCodeListOptions
            {
                Code = code,
                Expand = new List<string> { "data.promotion.coupon" }   // Stripe doesn't auto-populate nested Coupon anymore — must explicitly request it

            };

            var promotionCodes = await promotionService.ListAsync(options);

            var promotionCode = promotionCodes.FirstOrDefault();

            if (promotionCode != null && promotionCode.Promotion.Coupon != null)
            {
                return new AppCoupon
                {
                    Name = promotionCode.Promotion.Coupon.Name,
                    AmountOff = promotionCode.Promotion.Coupon.AmountOff,
                    PercentOff = promotionCode.Promotion.Coupon.PercentOff,
                    PromotionCode = promotionCode.Code,
                    CouponId = promotionCode.Promotion.Coupon.Id
                };
            }

            return null;



        }
       
    }
}
