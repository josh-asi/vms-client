import { Vehicle } from './types';
import { VehiclesAction } from './actions';

export interface VehiclesState {
  data: Vehicle[];
}

const initialState: VehiclesState = {
  data: [],
};

export default (
  state = initialState,
  action: VehiclesAction
): VehiclesState => {
  switch (action.type) {
    case 'ADD_VEHICLE':
      return { ...state, data: [...state.data, action.payload] };
    case 'GET_VEHICLES':
      return { ...state, data: action.payload };
    case 'UPDATE_MILEAGE':
      const updatedMileage = state.data.map((vehicle) => {
        if (vehicle.id === action.payload.id) {
          vehicle = { ...vehicle, mileage: action.payload.mileage };
        }
        return vehicle;
      });
      return { ...state, data: updatedMileage };
    default:
      return state;
  }
};
