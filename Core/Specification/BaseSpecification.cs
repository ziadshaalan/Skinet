using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class BaseSpecification<T>(Expression<Func<T, bool>>? criteria) : ISpecification<T>
    {
//        Without the empty constructor, every spec must pass a criteria expression — even when you want all rows with no filter.
//: this(null) just calls the main constructor with null as criteria — which is handled safely because criteria is marked as ? nullable.
        protected BaseSpecification() : this(null) { }


        public Expression<Func<T, bool>>? Criteria => criteria;

        public Expression<Func<T, object>> OrderBy { get; private set; }

        public Expression<Func<T, object>> OrderByDescending { get; private set; }

        public bool IsDistinct {  get; private set; }

        protected void AddOrderBy(Expression<Func<T, object>> orderByExpression)    // Protected - access modifier that restricts access to a class member to its containing class and any derived classes
        {
            OrderBy = orderByExpression;
        }

        protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescExpression)
        {
            OrderByDescending = orderByDescExpression;
        }

        protected void ApplyDistinct()
        {
            IsDistinct = true;
        }

    }


    public class BaseSpecification<T, TResult>(Expression<Func<T, bool>>? criteria)
       : BaseSpecification<T>(criteria), ISpecification<T, TResult>
    {

        protected BaseSpecification() : this(null) { }

        public Expression<Func<T, TResult>>? Select {  get; private set; }


        protected void AddSelect(Expression<Func<T, TResult>> selectExpression)
        {
            Select = selectExpression;
        }
    }
}
