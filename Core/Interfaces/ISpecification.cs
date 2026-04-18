using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>>? Criteria { get; }   // WHERE clause
        Expression<Func<T, object>> OrderBy { get; }
        Expression<Func<T, object>> OrderByDescending { get; }
        bool IsDistinct { get; }

    }


    // Extends ISpecification<T> to support projection (Select clause)
    // Allows a query to return a different type (TResult) instead of T
    // Used when we need List<string> or similar instead of List<T>
    public interface ISpecification<T, TResult> : ISpecification<T>
    {
        Expression<Func<T, TResult>>? Select {  get; }
    }
}
