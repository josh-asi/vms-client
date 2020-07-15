import { VehicleType } from './types';
import { VehicleTypeAction } from './actions';

export interface VehicleTypeState {
  data: VehicleType[];
}

const initialState: VehicleTypeState = {
  data: [],
};

export default (
  state = initialState,
  action: VehicleTypeAction
): VehicleTypeState => {
  switch (action.type) {
    case 'GET_VEHICLE_TYPES':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
