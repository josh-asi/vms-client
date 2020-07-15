import moxios from 'moxios';

import { getVehiclesRequest } from './requests';
import { storeFactory } from '../../../test/testUtils';
import { AppState } from '../store';
import { vehicles } from './vehiclesInMemory';

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
});
