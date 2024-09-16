import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLight, requestCrossing, resetTimer, startCountdown } from '../store/actions';
import Light from './Light';
import PedestrianButton from './PedestrianButton';

const TrafficLight = () => {
  const dispatch = useDispatch();
  const { currentLight, countdown, pedestrianRequested, emergencyOverride } = useSelector(state => state);

  useEffect(() => {
    const lightDurations = {
      green: 10,
      yellow: 3,
      red: 7,
    };

    if (!emergencyOverride) {
      const timer = setInterval(() => {
        dispatch(startCountdown(countdown - 1));

        if (countdown === 0) {
          switch (currentLight) {
            case 'green':
              dispatch(changeLight('yellow'));
              dispatch(startCountdown(lightDurations.yellow));
              break;
            case 'yellow':
              if (pedestrianRequested) {
                dispatch(changeLight('red'));
                dispatch(startCountdown(lightDurations.red + 5));
              } else {
                dispatch(changeLight('red'));
                dispatch(startCountdown(lightDurations.red));
              }
              break;
            case 'red':
              dispatch(changeLight('green'));
              dispatch(resetTimer());
              break;
            default:
              break;
          }
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentLight, countdown, pedestrianRequested, emergencyOverride, dispatch]);

  return (
    <div className="traffic-light">
      <Light color="red" isOn={currentLight === 'red'} countdown={countdown} />
      <Light color="yellow" isOn={currentLight === 'yellow'} countdown={countdown} />
      <Light color="green" isOn={currentLight === 'green'} countdown={countdown} />
      <PedestrianButton />
    </div>
  );
};

export default TrafficLight;
