import React from 'react';
import Classnames from 'classnames';
import { useDispatch } from 'react-redux';
import ModalWrapper from '../../modal-wrapper/ModalWrapper';

import './_update-mileage.scss';
import { updateMileageRequest } from '../../../redux/vehicles/requests';

interface UpdateMileageModalProps {
  closeUpdateMileageModal: () => void;
  vehicleId: number;
  mileage: number;
}

const UpdateMileageModal: React.FC<UpdateMileageModalProps> = ({
  closeUpdateMileageModal,
  mileage,
  vehicleId,
}) => {
  const dispatch = useDispatch();

  const [newMileage, setNewMileage] = React.useState<number>(mileage);

  const mileageInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewMileage(e.target.valueAsNumber);

  const addVehicleOnClick = () => {
    if (isButtonDisabled) return;

    dispatch(updateMileageRequest({ vehicleId, newMileage: newMileage }));

    closeUpdateMileageModal();
  };

  const isButtonDisabled = newMileage <= mileage;

  return (
    <ModalWrapper>
      <div className='update-mileage'>
        <div className='update-mileage__header'>
          <div className='update-mileage__title heading-tertiary'>
            Update Mileage
          </div>
          <span className='close-btn' onClick={closeUpdateMileageModal}>
            &times;
          </span>
        </div>
        <div className='update-mileage__body'>
          <div className='update-mileage__mileage'>
            <form>
              <label htmlFor='mileage'>Mileage :</label>
              <input
                type='number'
                step='0.1'
                min='0'
                id='mileage'
                onChange={mileageInputOnChange}
                value={newMileage}
              />
            </form>
          </div>
        </div>
        <div className='update-mileage__footer'>
          <button
            className={Classnames('btn update-btn', {
              disabled: isButtonDisabled,
            })}
            onClick={addVehicleOnClick}
          >
            Update
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default UpdateMileageModal;
