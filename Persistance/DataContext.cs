using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Journal> Journals { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Journal>().Property(e => e.Grill).HasConversion<string>();
            builder.Entity<Journal>().Property(e => e.Meat).HasConversion<string>();
            builder.Entity<Value>().HasData(new Value { Id = 1, Name = "Value 101" }, new Value { Id = 2, Name = "Value 102" }, new Value { Id = 3, Name = "Value 103" });
        }
    }
}
