using System.ComponentModel.DataAnnotations;

namespace Mission10Assignment.Data;

public class Team
{
    [Key]
    public int TeamID { get; set; }
    
    [Required]
    public string TeamName { get; set; }
    public int CaptainID { get; set; }
}