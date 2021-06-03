import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import availabilityReducer from './availabilityReducer';

export default combineReducers({
    auth: authReducer,
    availability: availabilityReducer,
    alert: alertReducer
})