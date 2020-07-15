import { combineReducers } from 'redux';
import vehicleReducer from './vehicles/reducer';
import vehicleTypesReducer from './vehicle-types/reducer';

export default combineReducers({
  vehicles: vehicleReducer,
  vehicleTypes: vehicleTypesReducer,
});
