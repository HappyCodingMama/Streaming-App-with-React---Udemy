import { combineReducers } from 'redux';
import authReducer from './authReducer';

const combineReducer =  combineReducers({
    
    auth: authReducer
});

export default combineReducer;
