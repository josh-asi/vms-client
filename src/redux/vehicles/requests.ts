import axios from 'axios';
import { server } from '../helpers';
import { AnyAction, Dispatch } from 'redux';
import { getVehicles, addVehicle } from './actions';
import { NewVehicleRequest } from './types';

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
    console.error(`Failed to retrieve vehicles : ${e}`);
  }
};
