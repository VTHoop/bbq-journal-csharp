using System.Linq;
using System.Collections.Generic;
using Domain;
using System;

namespace Persistance
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            Console.WriteLine("Preparing to Seed Database");
            if (!context.Journals.Any())
            {
                Console.WriteLine("No Data found. Seeding Data");
                var journals = new List<Journal>
                {
                    new Journal
                    {
                        Name = "Past Journal 1",
                        StartTime = DateTime.Now.AddMonths(-2).AddHours(-10),
                        EndTime = DateTime.Now.AddMonths(-2),
                        Notes = "Journal 2 months ago",
                        Grill = Grill.Smoker,
                        Meat = Meat.Pork,
                        Cut = "Baby Back Ribs",
                        Rating = 9
                    },
                    // new Journal
                    // {
                    //     Title = "Past Journal 2",
                    //     Date = DateTime.Now.AddMonths(-1),
                    //     Description = "Journal 1 month ago",
                    //     Category = "culture",
                    //     City = "Paris",
                    //     Venue = "Louvre",
                    // },
                    // new Journal
                    // {
                    //     Title = "Future Journal 1",
                    //     Date = DateTime.Now.AddMonths(1),
                    //     Description = "Journal 1 month in future",
                    //     Category = "culture",
                    //     City = "London",
                    //     Venue = "Natural History Museum",
                    // },
                    // new Journal
                    // {
                    //     Title = "Future Journal 2",
                    //     Date = DateTime.Now.AddMonths(2),
                    //     Description = "Journal 2 months in future",
                    //     Category = "music",
                    //     City = "London",
                    //     Venue = "O2 Arena",
                    // },
                    // new Journal
                    // {
                    //     Title = "Future Journal 3",
                    //     Date = DateTime.Now.AddMonths(3),
                    //     Description = "Journal 3 months in future",
                    //     Category = "drinks",
                    //     City = "London",
                    //     Venue = "Another pub",
                    // },
                    // new Journal
                    // {
                    //     Title = "Future Journal 4",
                    //     Date = DateTime.Now.AddMonths(4),
                    //     Description = "Journal 4 months in future",
                    //     Category = "drinks",
                    //     City = "London",
                    //     Venue = "Yet another pub",
                    // },
                    // new Journal
                    // {
                    //     Title = "Future Journal 5",
                    //     Date = DateTime.Now.AddMonths(5),
                    //     Description = "Journal 5 months in future",
                    //     Category = "drinks",
                    //     City = "London",
                    //     Venue = "Just another pub",
                    // },

                };

                context.Journals.AddRange(journals);
                context.SaveChanges();
            }
        }
    }
}