using Core.Entities;
using Core.Interfaces;
using System.Collections.Concurrent;
/*
* UNIT OF WORK:
*
* Provides one shared DbContext for all repositories used in a single operation
* and gives us ONE place to save all changes with Complete().
*
* Example of the problem without UnitOfWork:
*
*   ProductRepository.Update(product)
*   ProductRepository.SaveChanges()   <-- succeeds
*   OrderRepository.Update(order)
*   OrderRepository.SaveChanges()     <-- fails
*
* Now the product was updated but the order was not -> partial update.
*
* With UnitOfWork:
*
*   Update product
*   Update order
*        ↓
*   Complete()
*        ↓
*   SaveChangesAsync()
*
* Both changes are committed together in the same SaveChanges operation.
*/

namespace Infrastructure.Data
{
    public class UnitOfWork(StoreContext context) : IUnitOfWork
    {
        private readonly ConcurrentDictionary<string, object> _repositories = new();
        public async Task<bool> Complete()
        {
            return await context.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            context.Dispose();
        }


        public IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            /*
            * Get the name of the entity type.
            *
            * Product → "Product"
            * Order → "Order"
            */
            var type = typeof(TEntity).Name;
            /*
             * Get the repository from the dictionary.
             *
             * If it already exists → return the existing repository.
             *
             * If it doesn't exist → create it using the code inside the lambda,
             * store it in the dictionary, then return it.
             */
            return (IGenericRepository<TEntity>)_repositories.GetOrAdd(type, t =>
            {
                /*
                * GenericRepository<TEntity> is a generic type.
                *
                * We don't know at compile time whether we need:
                *
                * GenericRepository<Product>
                * GenericRepository<Order>
                * GenericRepository<DeliveryMethod>
                *
                * MakeGenericType creates the correct closed generic type at runtime.
                */
                var repositoryType = typeof(GenericRepository<>).MakeGenericType(typeof(TEntity));

                /*
                 * Create an instance of that repository.
                 *
                 * The repository constructor needs the same DbContext,
                 * so we pass "context" to it.
                 */
                return Activator.CreateInstance(repositoryType, context)        // similar to new GenericRepository<Product>(context)
                    ?? throw new InvalidOperationException($"Could not create repositoray instance for {t}");
            });
        }
    }
}
