import React from 'react';
import './_add-vehicle.scss';

interface AddVehicleModalProps {
  closeAddVehicleModal: () => void;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  closeAddVehicleModal,
}) => {
  return (
    <div className='add-vehicle'>
      <div className='add-vehicle__wrapper'>
        <div className='add-vehicle__content'>
          <div className='add-vehicle__header'>
            <div className='add-vehicle__title heading-tertiary'>
              Add Vehicle
            </div>
            <span className='close-btn' onClick={closeAddVehicleModal}>
              &times;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleModal;
