using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//defines product query rules from those params
//delegates query-building to the specification layer
//Contains: filters by name, brand, and type, sorts by price or name, and paging


namespace Core.Specification
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        //brand and type = WHERE clause — must be passed to BaseSpecification via : base() because that's the only way to set Criteria which lives in BaseSpecification.
        public ProductSpecification( ProductSpecParams productParams) : base(x =>
        (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
        (!productParams.Brands.Any() || productParams.Brands.Contains(x.Brand)) &&    //Contains() checks: "Is this product's brand inside the list the user requested?"
        (!productParams.Types.Any() || productParams.Types.Contains(x.Type))          // If no brands requested !Any() = true, which include all products in this case
        )
        //sort = ORDER BY — uses AddOrderBy() which is a protected method in BaseSpecification.Protected methods can only be called from the constructor body, not from : base().
        {

            ApplyPaging(productParams.PageSize * (productParams.PageIndex - 1), productParams.PageSize);


            switch (productParams.Sort)
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
