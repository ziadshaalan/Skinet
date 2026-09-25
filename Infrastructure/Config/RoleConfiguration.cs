using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
// Seeds default roles through EF Core migrations.
// HasData() requires fixed values so migrations stay consistent; don't use Guid.NewGuid() here.
//
// Id             → unique role ID.
// Name           → role name.
// NormalizedName → uppercase role name used by Identity for lookups.
// ConcurrencyStamp → version-like value used to detect changes to the role.
// In normal Identity usage, the ConcurrencyStamp is generated automatically


namespace Infrastructure.Config
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
    {
        public void Configure(EntityTypeBuilder<IdentityRole> builder)
        {
            builder.HasData(
                new IdentityRole { Id = "admin-id", ConcurrencyStamp = "admin", Name = "Admin", NormalizedName = "ADMIN" },
                new IdentityRole { Id = "customer-id", ConcurrencyStamp = "customer", Name = "Customer", NormalizedName = "CUSTOMER" }
                );
        }
    }
}
