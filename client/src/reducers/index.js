import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';


const combineReducer =  combineReducers({
    
    auth: authReducer,
    form: formReducer,
    streams: streamReducer

});

export default combineReducer;
