using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class ProductsByIdsSpecification : BaseSpecification<Product>
    {

        //The problem: the loop asked the database for one product at a time. A cart with 5 items meant 5 trips to the database.

        //The change: ask for all the products at once, one trip, then loop over them in memory.

        public ProductsByIdsSpecification(List<int> ids) : base(x => ids.Contains(x.Id))
        {
            
        }
    }
}
