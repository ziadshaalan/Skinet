using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        //brand and type = WHERE clause — must be passed to BaseSpecification via : base() because that's the only way to set Criteria which lives in BaseSpecification.
        public ProductSpecification(string? brand, string? type, string? sort) : base(x =>
        (string.IsNullOrWhiteSpace(brand) || x.Brand == brand) &&
        (string.IsNullOrWhiteSpace(type) || x.Type == type)
        )
        //sort = ORDER BY — uses AddOrderBy() which is a protected method in BaseSpecification.Protected methods can only be called from the constructor body, not from : base().
        {
            switch (sort)
            {
                case "priceAsc":
                    AddOrderBy(x => x.Price);
                    break;

                case "priceDesc":
                    AddOrderByDescending(x => x.Price);
                    break;
                default:
                    AddOrderBy(x=> x.Name);
                    break;
            }

        }
        
            
    }
}
