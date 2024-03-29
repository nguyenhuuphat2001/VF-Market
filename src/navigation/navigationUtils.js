import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createNavigationContainerRef();
export const isMountedRef = createRef();

// Use this function to navigate to specific page when you are using Redux-Saga
export const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const reset = params => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.reset(params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const navigatePop = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

export const popToTop = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop());
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};
