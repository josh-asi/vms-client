export interface Vehicle {
  id: number;
  type: string;
  speed: number;
  mileage: number;
}

export interface NewVehicleRequest {
  type: number;
  speed: number;
  mileage: number;
}
