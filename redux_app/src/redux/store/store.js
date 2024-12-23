import { createStore } from 'redux';
import counterReducer from '../reducer/Reducer';

// Create the Redux store
const store = createStore(counterReducer);

export default store;
