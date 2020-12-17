using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistance;

namespace Application.Journals
{
    public class Edit
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
                var journal = await _context.Journals.FindAsync(request.Id);
                if (journal == null) throw new Exception("Journal not found");

                Meat meat;
                Grill grill;
                Enum.TryParse(request.Grill, out grill);
                Enum.TryParse(request.Meat, out meat);

                journal.Id = request.Id;
                journal.Name = request.Name;
                journal.Notes = request.Notes;
                journal.Meat = meat;
                journal.Cut = request.Cut;
                journal.StartTime = request.StartTime;
                journal.EndTime = request.EndTime;
                journal.Rating = request.Rating;
                journal.Grill = grill;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;
                throw new Exception("Problem saving changes");
            }
        }
    }
}