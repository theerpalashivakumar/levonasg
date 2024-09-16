import { CHANGE_LIGHT, REQUEST_CROSSING, RESET_TIMER, EMERGENCY_OVERRIDE, START_COUNTDOWN } from './actionTypes';

const initialState = {
  currentLight: "green",  
  pedestrianRequested: false,
  emergencyOverride: false,
  countdown: 10,  
};

const trafficLightReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      return {
        ...state,
        currentLight: action.payload,
      };
    case REQUEST_CROSSING:
      return {
        ...state,
        pedestrianRequested: true,
      };
    case RESET_TIMER:
      return {
        ...state,
        countdown: 10,
      };
    case EMERGENCY_OVERRIDE:
      return {
        ...state,
        emergencyOverride: true,
      };
    case START_COUNTDOWN:
      return {
        ...state,
        countdown: action.payload,
      };
    default:
      return state;
  }
};

export default trafficLightReducer;
