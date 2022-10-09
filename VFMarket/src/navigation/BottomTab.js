import HomeStack from './HomeStack';
import ActivityScreen from '@/screens/ActivityScreen';
import HomeScreen from '@/screens/HomeScreen';
import MyCarScreen from '@/screens/MyCarScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import MapScreen from '@/screens/MapScreen';
import WalletScreen from '@/screens/WalletScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {COLORS} from '@/theme/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const KEY_BOTTOM_SCREEN = {
  HOME: 'Trang chủ',
  MAP: 'Bản đồ',
  MYCAR: 'Xe của tôi',
  WALLET: 'Ví',
  PROFILE: 'Tài khoản',
};

const BottomTabConstant = {
  [KEY_BOTTOM_SCREEN.HOME]: {
    name: KEY_BOTTOM_SCREEN.HOME,
    component: HomeStack,
    icon: 'home',
    index: 0,
    deactiveColor: COLORS.text_secondary,
    activeColor: COLORS.primary,
  },
  [KEY_BOTTOM_SCREEN.MAP]: {
    name: KEY_BOTTOM_SCREEN.MAP,
    component: MapScreen,
    icon: 'map',
    index: 1,
    deactiveColor: COLORS.text_secondary,
    activeColor: COLORS.primary,
  },
  [KEY_BOTTOM_SCREEN.MYCAR]: {
    name: KEY_BOTTOM_SCREEN.MYCAR,
    component: MyCarScreen,
    icon: 'time-to-leave',
    index: 2,
    deactiveColor: COLORS.text_secondary,
    activeColor: COLORS.primary,
  },
  [KEY_BOTTOM_SCREEN.WALLET]: {
    name: KEY_BOTTOM_SCREEN.WALLET,
    component: WalletScreen,
    icon: 'account-balance-wallet',
    index: 3,
    deactiveColor: COLORS.text_secondary,
    activeColor: COLORS.primary,
  },
  [KEY_BOTTOM_SCREEN.PROFILE]: {
    name: KEY_BOTTOM_SCREEN.PROFILE,
    component: ProfileScreen,
    icon: 'account-circle',
    index: 4,
    deactiveColor: COLORS.text_secondary,
    activeColor: COLORS.primary,
  },
};

const Tab = createBottomTabNavigator();

const renderBottomTab = Object.values(BottomTabConstant)
  .sort((a, b) => a.index - b.index)
  .map(item => (
    <Tab.Screen
      options={{
        headerShown: false,
        animationEnabled: true,
      }}
      key={item.name}
      name={item.name}
      component={item.component}
    />
  ));

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        const iconName = BottomTabConstant[route.name]?.icon;
        const newColor = focused
          ? BottomTabConstant[route.name].activeColor
          : BottomTabConstant[route.name].deactiveColor;
        if (route.name === KEY_BOTTOM_SCREEN.ATTENDANCE) {
          return (
            <View style={styles.tabIcon}>
              <Icon name={iconName} size={35} color={newColor} />
            </View>
          );
        }
        return <Icon name={iconName} size={size} color={newColor} />;
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.text,
    })}>
    {renderBottomTab}
  </Tab.Navigator>
);

export default BottomTab;
