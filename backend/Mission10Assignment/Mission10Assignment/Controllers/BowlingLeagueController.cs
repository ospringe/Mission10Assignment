using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
            var bowlerList = _bowlerContext.Bowlers.ToList();

            return (bowlerList);
        }
    }
}
