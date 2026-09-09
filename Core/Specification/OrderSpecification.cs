using Core.Entities.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class OrderSpecification : BaseSpecification<Order>
    {
        public OrderSpecification(string email) : base(x => x.BuyerEmail == email)
        {
            AddIncludes(x => x.OrderItems);
            AddIncludes(x => x.DeliveryMethod);
            AddOrderByDescending(x => x.OrderDate);
        }

        public OrderSpecification(string email, int id) : base(x => x.BuyerEmail == email && x.Id == id)
        {
            // Just a 2nd format aside the lambda expression
            AddIncludes("OrderItems");
            AddIncludes("DeliveryMethod");

            AddIncludes("OrderItems.XXXX"); // ThenInclude: XXXX is a related entity inside the 1st related entity to the main entity

        }
    }
}
