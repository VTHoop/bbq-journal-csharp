using System;
using System.Threading;
using System.Threading.Tasks;
using Application.DTOs;
using Domain;
using MediatR;
using Persistance;

namespace Application.Journals
{
    public class Details
    {
        public class Query : IRequest<JournalDto>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, JournalDto>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<JournalDto> Handle(Query request, CancellationToken cancellationToken)
            {
                var Journal = await _context.Journals.FindAsync(request.Id);
                return new JournalDto {
                    Id = Journal.Id,
                    Name = Journal.Name,
                    Notes = Journal.Notes,
                    Grill = Journal.Grill.ToString(),
                    Meat = Journal.Meat.ToString(),
                    Cut = Journal.Cut,
                    StartTime = Journal.StartTime,
                    EndTime = Journal.EndTime,
                    Rating = Journal.Rating
                };
            }
        }
    }
}