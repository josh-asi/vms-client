import { Vehicle, UpdatedMileageRespose } from './types';
import { typedAction } from '../helpers';
import { toast } from 'react-toastify';

export const addVehicle = (vehicle: Vehicle) => {
  toast.success(`New ${vehicle.type} added!`);
  return typedAction('ADD_VEHICLE', vehicle);
};

export const getVehicles = (vehicles: Vehicle[]) =>
  typedAction('GET_VEHICLES', vehicles);

export const updateMileage = (updatedMileage: UpdatedMileageRespose) => {
  toast.success(
    `New mileage for vehicle ${updatedMileage.vehicleId} is ${updatedMileage.newMileage} km`
  );
  return typedAction('UPDATE_MILEAGE', updatedMileage);
};

export const deleteVehicle = (vehicleId: number) => {
  toast.dark(`Vehicle ${vehicleId} deleted`);
  return typedAction('DELETE_VEHICLE', vehicleId);
};

export type VehiclesAction = ReturnType<
  | typeof addVehicle
  | typeof getVehicles
  | typeof updateMileage
  | typeof deleteVehicle
>;
