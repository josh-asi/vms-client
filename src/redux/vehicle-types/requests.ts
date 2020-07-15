import axios from 'axios';
import { server } from '../helpers';
import { AnyAction, Dispatch } from 'redux';
import { getVehicleTypes } from './actions';

const endpoint = `${server}/api/vehicle/types`;

export const getVehicleTypesRequest = () => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const { data } = await axios.get(endpoint);
    return dispatch(getVehicleTypes(data));
  } catch (e) {
    console.error(`Failed to retrieve vehicle types : ${e}`);
  }
};
