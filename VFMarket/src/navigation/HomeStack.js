import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';

import SplashScreen from '@/screens/SplashScreen';

import BottomTab from './BottomTab';

import AuthScreen from '@/screens/AuthScreen';

import ProfileScreen from '@/screens/ProfileScreen';
import MapScreen from '@/screens/MapScreen';

import HomeScreen from '@/screens/HomeScreen';

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

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
        name="DetailScreen"
        component={MapScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
