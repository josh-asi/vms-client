import React from 'react';
import { useDispatch } from 'react-redux';
import { getVehiclesRequest } from '../../redux/vehicles/requests';
import { getVehicleTypesRequest } from '../../redux/vehicle-types/requests';

const Vehicles = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getVehiclesRequest());
    dispatch(getVehicleTypesRequest());
  }, [dispatch]);

  return <div>Vehicles</div>;
};

export default Vehicles;
