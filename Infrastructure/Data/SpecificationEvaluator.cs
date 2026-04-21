using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class SpecificationEvaluator<T> where T : BaseEntity
    {
        // GetQuery (Basic) — Filters + Orders the query, returns same entity type T
        // Used when you want full Product objects back
        public static IQueryable<T> GetQuery(IQueryable<T> query, ISpecification<T> spec)

        // initial query = SELECT * FROM Products(T) ->> from method parameter 
        // spec.Criteria = x => x.Id == 5  
        //query.Where(spec.Criteria) = SELECT * FROM Products WHERE Id = 5      (still not executed, just built the query )
        //"Take the base query + the spec rules → build the final EF query"
        {
            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            if (spec.OrderBy != null)
            {
                query = query.OrderBy(spec.OrderBy);
            }

            if (spec.OrderByDescending != null)
            {
                query = query.OrderByDescending(spec.OrderByDescending);
            }

            if (spec.IsDistinct)
            {
                query = query.Distinct();
            }

            if(spec.IsPagingEnabled)
            {
                query = query.Skip(spec.Skip).Take(spec.Take);
            }

            return query;
        }


        // GetQuery (Projection) — Same as above BUT also applies Select() to transform T → TResult
        // Used when you want a different shape back (e.g. Product → string for brand names)
        public static IQueryable<TResult> GetQuery<TSpec, TResult>(IQueryable<T> query, ISpecification<T, TResult> spec)
        {
            if (spec.Criteria != null)
            {
                query = query.Where(spec.Criteria);
            }

            if (spec.OrderBy != null)
            {
                query = query.OrderBy(spec.OrderBy);
            }

            if (spec.OrderByDescending != null)
            {
                query = query.OrderByDescending(spec.OrderByDescending);
            }

            var selectQuery = query as IQueryable<TResult>;  //It guarantees that selectQuery is null as query will be always as Product type due to upper logic

            if (spec.Select != null)
            {
                selectQuery =  query.Select(spec.Select);
                // IQueryable<Product> → IQueryable<string>
            }

            if (spec.IsDistinct)
            {
                selectQuery = selectQuery?.Distinct();
            }

            if (spec.IsPagingEnabled)
            {
                selectQuery = selectQuery?.Skip(spec.Skip).Take(spec.Take);
            }

            return selectQuery ?? query.Cast<TResult>();
            //"Just treat whatever is in query as TResult directly" //  This only works safely if T and TResult happen to be the same type
            /// The ?? operator checks if the expression on the left is null. If it is, it returns the value on the right. 

        }

    }

}
