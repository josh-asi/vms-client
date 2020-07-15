export interface Vehicle {
  id: number;
  type: string;
  speed: number;
  mileage: number;
}

// Requests
export interface NewVehicleRequest {
  type: number;
  speed: number;
  mileage: number;
}

export interface UpdateMileageRequest {
  id: number;
  mileage: number;
}

// Responses
export interface UpdatedMileageRespose extends UpdateMileageRequest {}
