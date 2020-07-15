import moxios from 'moxios';

import {
  getVehiclesRequest,
  addNewVehicleRequest,
  updateMileageRequest,
  deleteVehicleRequest,
} from './requests';
import { storeFactory } from '../../../test/testUtils';
import { AppState } from '../store';
import { vehicles } from './vehiclesInMemory';
import {
  Vehicle,
  NewVehicleRequest,
  UpdatedMileageRespose,
  UpdateMileageRequest,
} from './types';

describe('Vehicle integration test', () => {
  let store = storeFactory();

  beforeEach(() => {
    moxios.install();
    const initialState: Partial<AppState> = {
      vehicles: {
        data: vehicles,
      },
    };

    store = storeFactory(initialState);
  });
  afterEach(() => moxios.uninstall());

  it('should add a new vehicle and add it to the bottom of the list', () => {
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

  it('should update the mileage for a vehicle based on the id', () => {
    const id = 1;
    const mileage = 999999.99;

    const response: UpdatedMileageRespose = { id, mileage };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response,
        status: 200,
      });
    });

    const request: UpdateMileageRequest = { id, mileage };
    const expectedData: Vehicle = { ...vehicles[0], mileage };

    return store.dispatch(updateMileageRequest(request)).then(() => {
      const data = store.getState().vehicles.data[0];
      expect(data).toEqual(expectedData);
    });
  });

  it('should delete a vehicle based on the id', () => {
    const id = 1;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        response: id,
        status: 200,
      });
    });

    const expectedData = [vehicles[1], vehicles[2]];

    return store.dispatch(deleteVehicleRequest(id)).then(() => {
      const { data } = store.getState().vehicles;
      expect(data).toEqual(expectedData);
    });
  });
});
