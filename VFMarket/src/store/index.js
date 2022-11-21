import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import authReducer from './auth';
import productReducer from './product';
const reducer = combineReducers({
  authReducer,
  productReducer,
});

export const store = configureStore({
  reducer,
});
