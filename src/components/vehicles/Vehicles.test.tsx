import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { useDispatch, useSelector } from 'react-redux';
import Vehicles from './Vehicles';
import {
  getVehiclesRequest,
  deleteVehicleRequest,
} from '../../redux/vehicles/requests';
import { getVehicleTypesRequest } from '../../redux/vehicle-types/requests';

import { AppState } from '../../redux/store';
import { vehicles } from '../../redux/vehicles/vehiclesInMemory';
import { findByTestAttr } from '../../../test/testUtils';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('../../redux/vehicles/requests', () => ({
  getVehiclesRequest: jest.fn(),
  deleteVehicleRequest: jest.fn(),
}));

jest.mock('../../redux/vehicle-types/requests', () => ({
  getVehicleTypesRequest: jest.fn(),
}));

const mockUseDispatch = useDispatch as jest.Mock;
const mockDispatch = jest.fn();
mockUseDispatch.mockImplementation(() => mockDispatch);

const mockAppState: Partial<AppState> = {
  vehicles: {
    data: vehicles,
  },
  vehicleTypes: {
    data: [
      {
        id: 0,
        description: 'Truck',
      },
      {
        id: 1,
        description: 'Bus',
      },
    ],
  },
};

const mockUseSelector = useSelector as jest.Mock;
mockUseSelector.mockImplementation((fn) => fn(mockAppState));

const mockGetVehicles = getVehiclesRequest as jest.Mock;
const mockGetVehiclesRequest = jest.fn();
mockGetVehicles.mockImplementation(() => mockGetVehiclesRequest);

const mockGetVehicleTypes = getVehicleTypesRequest as jest.Mock;
const mockGetVehicleTypesRequest = jest.fn();
mockGetVehicleTypes.mockImplementation(() => mockGetVehicleTypesRequest);

const mockDeleteVehicle = deleteVehicleRequest as jest.Mock;
const mockDeleteVehicleRequest = jest.fn();
mockDeleteVehicle.mockImplementation(() => mockDeleteVehicleRequest);

const setup = () => mount(<Vehicles />);

describe('<Vehicles />', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    mockDispatch.mockClear();
    mockUseSelector.mockClear();
    mockUseSelector.mockImplementation((fn) => fn(mockAppState));

    mockGetVehiclesRequest.mockClear();
    mockGetVehicleTypesRequest.mockClear();

    mockDeleteVehicleRequest.mockClear();
    wrapper = setup();
  });

  describe('useEffect initialisation', () => {
    it('should call getVehiclesRequest', () => {
      expect(mockDispatch).toHaveBeenCalledWith(mockGetVehiclesRequest);
    });
    it('should call getVehicleTypesRequest', () => {
      expect(mockDispatch).toHaveBeenCalledWith(mockGetVehicleTypesRequest);
    });
  });

  describe('actions', () => {
    it('should call deleteVehicleRequest', () => {
      const deleteBtn = findByTestAttr(wrapper, 'delete-btn--1');
      deleteBtn.simulate('click');
      expect(mockDispatch).toHaveBeenCalledWith(mockDeleteVehicleRequest);
    });
  });
});
