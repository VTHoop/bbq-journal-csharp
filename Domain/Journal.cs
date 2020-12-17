using System;

namespace Domain
{
    public class Journal
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public Grill Grill { get; set; }
        public Meat Meat { get; set; }
        public string Cut { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Rating { get; set; }
    }
}