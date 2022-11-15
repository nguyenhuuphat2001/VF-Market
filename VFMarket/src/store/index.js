import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import authReducer from './auth';
const reducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer,
});
