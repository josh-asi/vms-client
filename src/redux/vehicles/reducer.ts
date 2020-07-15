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
    case 'GET_VEHICLES':
      return { ...state, data: action.payload };
    case 'ADD_VEHICLE':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};
