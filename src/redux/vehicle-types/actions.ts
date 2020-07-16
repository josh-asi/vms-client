import { typedAction } from '../helpers';
import { VehicleType } from './types';

export const getVehicleTypes = (vehicleTypes: VehicleType[]) =>
  typedAction('GET_VEHICLE_TYPES', vehicleTypes);

export type VehicleTypeAction = ReturnType<typeof getVehicleTypes>;
