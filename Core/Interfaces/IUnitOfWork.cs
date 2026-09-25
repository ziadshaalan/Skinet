using Core.Entities;
using System;
using System.Collections.Generic;
using System.Formats.Tar;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {

        // Gives us the repository for whatever entity we need.
        // All repositories created by the UnitOfWork use the same DbContext.
        IGenericRepository<TEntity> Repository<TEntity>()
            where TEntity : BaseEntity;           //This restricts the method -- Meaning You can't do: unit.Repository<string>()

// The single place where changes are committed to the database.
// This prevents each repository from saving independently.
Task<bool> Complete();
    }
}
