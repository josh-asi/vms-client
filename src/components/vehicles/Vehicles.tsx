import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getVehiclesRequest,
  deleteVehicleRequest,
} from '../../redux/vehicles/requests';
import { getVehicleTypesRequest } from '../../redux/vehicle-types/requests';
import { AppState } from '../../redux/store';
import { Vehicle } from '../../redux/vehicles/types';

import EditIcon from './icons/edit.svg';
import DeleteIcon from './icons/trash.svg';

import './_vehicles.scss';
import AddVehicleModal from './add-vehicle-modal/AddVehicleModal';

const Vehicles = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getVehiclesRequest());
    dispatch(getVehicleTypesRequest());
  }, [dispatch]);

  const vehicles = useSelector<AppState, Vehicle[]>(
    (state) => state.vehicles.data
  );

  const [addModalVisible, setAddModalVisible] = React.useState<boolean>(false);

  const closeAddVehicleModal = () => setAddModalVisible(false);

  const deleteVehicle = (vehicleId: number) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      dispatch(deleteVehicleRequest(vehicleId));
    }
  };

  return (
    <div className='vehicles'>
      <table className='vehicles__table'>
        <thead className='vehicles__table-header'>
          <tr>
            <th className='vehicles__id'>ID</th>
            <th className='vehicles__type'>Type</th>
            <th className='vehicles__speed'>Speed (km/h)</th>
            <th className='vehicles__mileage'>Mileage (km)</th>
            <th className='vehicles__actions'>Actions</th>
          </tr>
        </thead>
        <tbody className='vehicles__content'>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td className='vehicles__id'>{vehicle.id}</td>
              <td className='vehicles__type'>{vehicle.type}</td>
              <td className='vehicles__speed'>{vehicle.speed}</td>
              <td className='vehicles__mileage'>{vehicle.mileage}</td>
              <td className='vehicles__actions'>
                <img
                  src={EditIcon}
                  alt='Edit Icon'
                  className='vehicles__action vehicles__action--edit'
                />
                <img
                  data-test={`delete-btn--${vehicle.id}`}
                  src={DeleteIcon}
                  alt='Delete Icon'
                  className='vehicles__action vehicles__action--delete'
                  onClick={() => deleteVehicle(vehicle.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='vehicles__add'>
        <span
          className='vehicles__add-button'
          onClick={() => setAddModalVisible(true)}
        >
          Add Vehicle
        </span>
      </div>

      {addModalVisible && (
        <AddVehicleModal closeAddVehicleModal={closeAddVehicleModal} />
      )}
    </div>
  );
};

export default Vehicles;
