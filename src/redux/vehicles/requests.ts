import axios from 'axios';
import { server } from '../helpers';
import { AnyAction, Dispatch } from 'redux';
import { toast } from 'react-toastify';
import {
  getVehicles,
  addVehicle,
  updateMileage,
  deleteVehicle,
} from './actions';
import { NewVehicleRequest, UpdateMileageRequest } from './types';

const endpoint = `${server}/api/vehicle`;

export const addNewVehicleRequest = (request: NewVehicleRequest) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.post(endpoint, request);
    return dispatch(addVehicle(data));
  } catch (e) {
    const errorMessage = 'Failed to add new vehicle';
    console.error(`${errorMessage} : ${e}`);
    toast.error(errorMessage);
  }
};

export const getVehiclesRequest = () => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.get(`${server}/api/vehicles`);
    return dispatch(getVehicles(data));
  } catch (e) {
    const errorMessage = 'Failed to retrieve vehicles';
    console.error(`${errorMessage} : ${e}`);
    toast.error(errorMessage);
  }
};

export const updateMileageRequest = (request: UpdateMileageRequest) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.patch(`${endpoint}/mileage`, request);
    return dispatch(updateMileage(data));
  } catch (e) {
    const errorMessage = 'Failed to update mileage';
    console.error(`${errorMessage} : ${e}`);
    toast.error(errorMessage);
  }
};

export const deleteVehicleRequest = (vehicleId: number) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.delete(`${endpoint}/${vehicleId}`);
    return dispatch(deleteVehicle(data));
  } catch (e) {
    const errorMessage = 'Failed to delete vehicle';
    console.error(`${errorMessage} : ${e}`);
    toast.error(errorMessage);
  }
};
