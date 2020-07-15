import { Vehicle, UpdatedMileageRespose } from './types';
import { typedAction } from '../helpers';

export const addVehicle = (vehicle: Vehicle) =>
  typedAction('ADD_VEHICLE', vehicle);

export const getVehicles = (vehicles: Vehicle[]) =>
  typedAction('GET_VEHICLES', vehicles);

export const updateMileage = (updatedMileage: UpdatedMileageRespose) =>
  typedAction('UPDATE_MILEAGE', updatedMileage);

export const deleteVehicle = (vehicleId: number) =>
  typedAction('DELETE_VEHICLE', vehicleId);

export type VehiclesAction = ReturnType<
  | typeof addVehicle
  | typeof getVehicles
  | typeof updateMileage
  | typeof deleteVehicle
>;
