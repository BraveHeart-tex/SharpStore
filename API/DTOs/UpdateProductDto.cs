using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace API.DTOs
{
  public class UpdateProductDto
  {
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Description { get; set; }
    [Required]
    [Range(100, Double.PositiveInfinity, ErrorMessage = "Price must be greater than zero")]
    public long Price { get; set; }
    public IFormFile File { get; set; }
    [Required]
    public string Type { get; set; }
    [Required]
    public string Brand { get; set; }
    [Required]
    [Range(0, 200, ErrorMessage = "Quantity must be between 0 and 200")]
    public int QuantityInStock { get; set; }
  }
}
