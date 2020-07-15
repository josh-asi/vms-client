import moxios from 'moxios';

import { getVehiclesRequest, addNewVehicleRequest } from './requests';
import { storeFactory } from '../../../test/testUtils';
import { AppState } from '../store';
import { vehicles } from './vehiclesInMemory';
import { Vehicle, NewVehicleRequest } from './types';

describe('Vehicle integration test', () => {
  let store = storeFactory();

  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should grab all the vehicles', () => {
    const initialState: Partial<AppState> = {
      vehicles: {
        data: [],
      },
    };

    store = storeFactory(initialState);

    const response = vehicles;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response,
        status: 200,
      });
    });

    return store.dispatch(getVehiclesRequest()).then(() => {
      const { data } = store.getState().vehicles;
      expect(data).toEqual(response);
    });
  });

  it('should add a new vehicle and add it to the bottom of the list', () => {
    const initialState: Partial<AppState> = {
      vehicles: {
        data: vehicles,
      },
    };

    store = storeFactory(initialState);

    const response: Vehicle = {
      id: 5,
      speed: 99.99,
      mileage: 999.99,
      type: 'Bus',
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response,
        status: 200,
      });
    });

    const request: NewVehicleRequest = {
      type: 2,
      mileage: response.mileage,
      speed: response.speed,
    };

    const expectedData = [...vehicles, response];

    return store.dispatch(addNewVehicleRequest(request)).then(() => {
      const { data } = store.getState().vehicles;
      expect(data).toEqual(expectedData);
    });
  });
});
