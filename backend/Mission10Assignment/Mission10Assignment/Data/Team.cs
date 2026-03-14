using System.ComponentModel.DataAnnotations;

namespace Mission10Assignment.Data;

// Setting all the columns of the Teams table
public class Team
{
    [Key]
    public int TeamID { get; set; }
    
    [Required]
    public string TeamName { get; set; }
    public int CaptainID { get; set; }
}