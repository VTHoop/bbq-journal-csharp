using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Journals
{
    public class Create
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                Meat meat;
                Grill grill;
                Enum.TryParse(request.Grill, out grill);
                Enum.TryParse(request.Meat, out meat);

                var Journal = new Journal
                {
                    Id = request.Id,
                    Name = request.Name,
                    Notes = request.Notes,
                    Meat = meat,
                    Cut = request.Cut,
                    StartTime = request.StartTime,
                    EndTime = request.EndTime,
                    Rating = request.Rating,
                    Grill = grill,
                };
                _context.Journals.Add(Journal);

                if (await _context.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Journal not created successfully");
            }
        }
    }
}