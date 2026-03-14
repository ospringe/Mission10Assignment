using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mission10Assignment.Data;

// Setting all the columns of the Bowlers table
public class Bowler
{
    [Key]
    public int BowlerID { get; set; }
    
    [Required]
    public string BowlerLastName { get; set; }
    [Required]
    public string BowlerFirstName { get; set; }

    public string? BowlerMiddleInit { get; set; }
    [Required]
    public string BowlerAddress { get; set; }
    [Required]
    public string BowlerCity { get; set; }
    [Required]
    public string BowlerState { get; set; }
    [Required]
    public string BowlerZip { get; set; }
    [Required] 
    public string BowlerPhoneNumber { get; set; }
    public int TeamID { get; set; }
    
    [ForeignKey("TeamID")]
    public Team? Team { get; set; }
    
}