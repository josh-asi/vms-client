import axios from 'axios';
import { server } from '../helpers';
import { AnyAction, Dispatch } from 'redux';
import { getVehicles, addVehicle, updateMileage } from './actions';
import { NewVehicleRequest, UpdateMileageRequest } from './types';

const endpoint = `${server}/api/vehicle`;

export const getVehiclesRequest = () => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.get(`${server}/api/vehicles`);
    return dispatch(getVehicles(data));
  } catch (e) {
    console.error(`Failed to retrieve vehicles : ${e}`);
  }
};

export const addNewVehicleRequest = (request: NewVehicleRequest) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.post(endpoint, request);
    return dispatch(addVehicle(data));
  } catch (e) {
    console.error(`Failed to add new vehicle : ${e}`);
  }
};

export const updateMileageRequest = (request: UpdateMileageRequest) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.put(endpoint, request);
    return dispatch(updateMileage(data));
  } catch (e) {
    console.error(`Failed to update mileage : ${e}`);
  }
};
