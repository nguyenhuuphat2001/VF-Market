import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';

import HomeScreen from '@/screens/HomeScreen';
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
    </Stack.Navigator>
  );
};

export default HomeStack;
