using API.Entities.OrderAggregate;

namespace API.DTOs;

public class CreateOrderDto
{
  public bool SaveAddress { get; set; } = true;
  public ShippingAddress ShippingAddress { get; set; }

}
