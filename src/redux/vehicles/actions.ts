import { Vehicle } from './types';
import { typedAction } from '../helpers';

export const addVehicle = (vehicle: Vehicle) =>
  typedAction('ADD_VEHICLE', vehicle);

export const getVehicles = (vehicles: Vehicle[]) =>
  typedAction('GET_VEHICLES', vehicles);

export type VehiclesAction = ReturnType<typeof getVehicles | typeof addVehicle>;
