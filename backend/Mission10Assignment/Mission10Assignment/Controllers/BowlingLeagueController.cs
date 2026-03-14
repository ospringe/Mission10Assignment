using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10Assignment.Data;

namespace Mission10Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private BowlerDbContext _bowlerContext;
        
        public BowlingLeagueController(BowlerDbContext temp)
        {
            _bowlerContext = temp;
        }
        
        [HttpGet(Name = "GetBowlingLeague")]
        public IEnumerable<Bowler> Get()
        {
            // Calling the data from the database and filtering for the bowlers that are on either the Sharks or Marlins teams
            var bowlerList = _bowlerContext.Bowlers.Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .ToList();

            return (bowlerList);
        }
    }
}
