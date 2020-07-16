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
import UpdateMileageModal from './update-mileage-modal/UpdateMileageModal';

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
  const [
    updateMileageModalVisible,
    setUpdateMileageModalVisible,
  ] = React.useState<boolean>(false);
  const [updateMileageModalId, setUpdateMileageModalId] = React.useState<
    number
  >(-1);

  const [mileage, setMileage] = React.useState<number>(-1);

  const closeAddVehicleModal = () => setAddModalVisible(false);
  const closeUpdateMileageModal = () => {
    setUpdateMileageModalId(-1);
    setUpdateMileageModalVisible(false);
    setMileage(-1);
  };

  const deleteVehicle = (vehicleId: number) => {
    if (
      window.confirm(`Are you sure you want to delete vehicle ${vehicleId}?`)
    ) {
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
                  onClick={() => {
                    setUpdateMileageModalId(vehicle.id);
                    setUpdateMileageModalVisible(true);
                    setMileage(vehicle.mileage);
                  }}
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
        <button
          className='vehicles__add-button btn add-btn'
          onClick={() => setAddModalVisible(true)}
        >
          Add Vehicle
        </button>
      </div>

      {addModalVisible && (
        <AddVehicleModal closeAddVehicleModal={closeAddVehicleModal} />
      )}

      {updateMileageModalVisible && (
        <UpdateMileageModal
          closeUpdateMileageModal={closeUpdateMileageModal}
          mileage={mileage}
          vehicleId={updateMileageModalId}
        />
      )}
    </div>
  );
};

export default Vehicles;
