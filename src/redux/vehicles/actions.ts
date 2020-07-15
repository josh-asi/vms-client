import { Vehicle, UpdatedMileageRespose } from './types';
import { typedAction } from '../helpers';

export const addVehicle = (vehicle: Vehicle) =>
  typedAction('ADD_VEHICLE', vehicle);

export const getVehicles = (vehicles: Vehicle[]) =>
  typedAction('GET_VEHICLES', vehicles);

export const updateMileage = (updatedMileage: UpdatedMileageRespose) =>
  typedAction('UPDATE_MILEAGE', updatedMileage);

export type VehiclesAction = ReturnType<
  typeof getVehicles | typeof addVehicle | typeof updateMileage
>;
