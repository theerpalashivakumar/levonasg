import { createStore } from 'redux';
import trafficLightReducer from './reducers';

const store = createStore(trafficLightReducer);

export default store;
