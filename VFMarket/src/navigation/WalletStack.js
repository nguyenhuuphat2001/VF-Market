import React, {createRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '@/screens/ProfileScreen';
import BMIScreen from '@/screens/BMIScreen';
import BMIStatisticScreen from '@/screens/BMIStatisticScreen';
import UpdateBMIScreen from '@/screens/UpdateBMI';
import MyCalendarScreen from '@/screens/MyCalendarScreen';
import HistoryPaymentScreen from '@/screens/HistoryPayment';

import FavoriteScreen from '@/screens/FavoriteScreen';

const Stack = createStackNavigator();

export const KEY_PROFILE_SCREEN = {
  PROFILE_SCREEN: 'ProfileScreen',
  BMI_SCREEN: 'BMIScreen',
  BMI_STATISTIC_SCREEN: 'BMIStatisticScreen',
  UPDATE_BMI_SCREEN: 'UpdateBMIScreen',
  MY_CALENDAR_SCREEN: 'MyCalendarScreen',
  HISTORY_PAYMENT_SCREEN: 'HistoryPaymentScreen',
  FAVORITE_SCREEN: 'FavoriteScreen',
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          animationEnabled: true,
        }}
        name={KEY_PROFILE_SCREEN.PROFILE_SCREEN}
        component={ProfileScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.BMI_SCREEN}
        component={BMIScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.BMI_STATISTIC_SCREEN}
        component={BMIStatisticScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.UPDATE_BMI_SCREEN}
        component={UpdateBMIScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.MY_CALENDAR_SCREEN}
        component={MyCalendarScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.HISTORY_PAYMENT_SCREEN}
        component={HistoryPaymentScreen}
      />

      <Stack.Screen
        options={() => ({
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
          headerShown: false,
          animationEnabled: true,
        })}
        name={KEY_PROFILE_SCREEN.FAVORITE_SCREEN}
        component={FavoriteScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
