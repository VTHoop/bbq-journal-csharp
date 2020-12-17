using System;

namespace Application.DTOs
{
    public class JournalDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public string Grill { get; set; }
        public string Meat { get; set; }
        public string Cut { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public int Rating { get; set; }
    }
}