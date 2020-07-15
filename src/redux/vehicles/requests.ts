import axios from 'axios';
import { server } from '../helpers';
import { AnyAction, Dispatch } from 'redux';
import { getVehicles } from './actions';

// const endpoint = `${server}/api/vehicle`;

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
