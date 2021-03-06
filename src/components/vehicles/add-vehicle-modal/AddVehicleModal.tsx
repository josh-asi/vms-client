import React from 'react';
import Classnames from 'classnames';
import Select, { ValueType } from 'react-select';
import ModalWrapper from '../../modal-wrapper/ModalWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { VehicleType } from '../../../redux/vehicle-types/types';
import { AppState } from '../../../redux/store';

import './_add-vehicle.scss';
import { addNewVehicleRequest } from '../../../redux/vehicles/requests';

interface AddVehicleModalProps {
  closeAddVehicleModal: () => void;
}

interface Option {
  label: string;
  value: any;
}

const AddVehicleModal: React.FC<AddVehicleModalProps> = ({
  closeAddVehicleModal,
}) => {
  const dispatch = useDispatch();

  const [type, setType] = React.useState<number>(0);
  const [speed, setSpeed] = React.useState<number>(0.0);
  const [mileage, setMileage] = React.useState<number>(0.0);

  const vehicleTypes = useSelector<AppState, VehicleType[]>(
    (state) => state.vehicleTypes.data
  );

  const vehicleTypeOptions: Option[] = vehicleTypes.map((vehicleType) => ({
    value: vehicleType.id,
    label: vehicleType.description,
  }));

  const selectOnChange = (selectedOption: ValueType<Option>) => {
    const chosen = selectedOption as Option;
    setType(chosen.value);
  };

  const speedInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSpeed(e.target.valueAsNumber);

  const mileageInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMileage(e.target.valueAsNumber);

  const addVehicleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isButtonDisabled) return;

    dispatch(
      addNewVehicleRequest({
        type,
        speed,
        mileage,
      })
    );

    closeAddVehicleModal();
  };

  const isButtonDisabled = type === 0;

  return (
    <ModalWrapper>
      <div className='add-vehicle'>
        <div className='add-vehicle__header'>
          <div className='add-vehicle__title heading-tertiary'>Add Vehicle</div>
          <span className='close-btn' onClick={closeAddVehicleModal}>
            &times;
          </span>
        </div>
        <div className='add-vehicle__body'>
          <div className='add-vehicle__type'>
            Type :
            <Select
              classNamePrefix='add-vehicle'
              options={vehicleTypeOptions}
              onChange={selectOnChange}
            />
          </div>
          <div className='add-vehicle__speed'>
            <form>
              <label htmlFor='speed'>Speed :</label>
              <input
                type='number'
                step='0.1'
                min='0'
                id='speed'
                onChange={speedInputOnChange}
                value={speed}
              />
            </form>
          </div>
          <div className='add-vehicle__mileage'>
            <form>
              <label htmlFor='mileage'>Mileage :</label>
              <input
                type='number'
                step='0.1'
                min='0'
                id='mileage'
                onChange={mileageInputOnChange}
                value={mileage}
              />
            </form>
          </div>
        </div>
        <div className='add-vehicle__footer'>
          <button
            className={Classnames('btn add-btn', {
              disabled: isButtonDisabled,
            })}
            onClick={addVehicleOnClick}
          >
            Add
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddVehicleModal;
