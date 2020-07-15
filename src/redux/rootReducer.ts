import { combineReducers } from 'redux';
import vehicleReducer from './vehicles/reducer';

export default combineReducers({
  vehicles: vehicleReducer,
});
