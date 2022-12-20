import {configureStore} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import authReducer from './auth';
import productReducer from './product';
import walletReducer from './wallet';
const reducer = combineReducers({
  authReducer,
  productReducer,
  walletReducer,
});

export const store = configureStore({
  reducer,
});

export const useAppSelector = useSelector;
