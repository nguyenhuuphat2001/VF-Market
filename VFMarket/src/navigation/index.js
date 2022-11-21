import React, {createRef} from 'react';

import {enableScreens} from 'react-native-screens';

import SplashScreen from '@/screens/SplashScreen';

import BottomTab from './BottomTab';

import AuthScreen from '@/screens/AuthScreen';

import {route} from './route';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {HEADER_OPTIONS} from './config';

enableScreens();

export const navigationRef = createRef();
export const isMountedRef = createRef();

export const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    // If deeplink is same as current screen focused then use replace
    // Because we need to update UI
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const Stack = createSharedElementStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={HEADER_OPTIONS}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={HEADER_OPTIONS}
        name="AuthScreen"
        component={AuthScreen}
      />

      <Stack.Screen
        options={HEADER_OPTIONS}
        name="MAIN"
        component={BottomTab}
      />
      {route.map(item => (
        <Stack.Screen
          key={item.name}
          options={HEADER_OPTIONS}
          sharedElements={item.configShareElement}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
