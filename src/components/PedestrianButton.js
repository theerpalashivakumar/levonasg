import React from 'react';
import { useDispatch } from 'react-redux';
import { requestCrossing } from '../store/actions';

const PedestrianButton = () => {
  const dispatch = useDispatch();

  const handlePedestrianRequest = () => {
    dispatch(requestCrossing());
  };

  return (
    <button onClick={handlePedestrianRequest} className="pedestrian-button">
      Pedestrian Crossing
    </button>
  );
};

export default PedestrianButton;
