using System.Linq;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;
using Application.DTOs;

namespace Application.Journals
{
    public class List
    {
        public class Query : IRequest<List<JournalDto>> { }

        public class Handler : IRequestHandler<Query, List<JournalDto>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<JournalDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Journals.ToListAsync();

                return activities.Select(s => new JournalDto {
                    Id = s.Id,
                    Name = s.Name,
                    Notes = s.Notes,
                    Grill = s.Grill.ToString(),
                    Meat = s.Meat.ToString(),
                    Cut = s.Cut,
                    StartTime = s.StartTime,
                    EndTime = s.EndTime,
                    Rating = s.Rating
                }).ToList();
            }
        }
    }
}