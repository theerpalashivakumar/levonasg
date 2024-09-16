import { CHANGE_LIGHT, REQUEST_CROSSING, RESET_TIMER, EMERGENCY_OVERRIDE, START_COUNTDOWN } from './actionTypes';

// Action creators
export const changeLight = (light) => ({
  type: CHANGE_LIGHT,
  payload: light,
});

export const requestCrossing = () => ({
  type: REQUEST_CROSSING,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const emergencyOverride = () => ({
  type: EMERGENCY_OVERRIDE,
});

export const startCountdown = (time) => ({
  type: START_COUNTDOWN,
  payload: time,
});
