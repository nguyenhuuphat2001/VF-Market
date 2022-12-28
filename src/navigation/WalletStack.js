// import React, {createRef} from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

// import WalletScreen from '@/screens/WalletScreen';
// import IntroWalletScreen from '@/screens/IntroWalletScreen';
// import CreatePasswordWalletScreen from '@/screens/CreatePasswordWalletScreen';
// import CreateWalletScreen from '@/screens/CreatePasswordWalletScreen';

// const Stack = createStackNavigator();

// export const KEY_WALLET_SCREEN = {
//   WALLET_SCREEN: 'WalletScreen',
//   INTRO_WALLET_SCREEN: 'IntroWalletScreen',
//   CREATE_PASSWORD_WALLET_SCREEN: 'CreatePasswordWalletScreen',
//   CREATE_WALLET_SCREEN: 'CreateWalletScreen',
// };

// const WalletStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           animationEnabled: true,
//         }}
//         name={KEY_WALLET_SCREEN.WALLET_SCREEN}
//         component={WalletScreen}
//       />
//       {/* <Stack.Screen
//         options={{
//           headerShown: false,
//           animationEnabled: true,
//         }}
//         name={KEY_WALLET_SCREEN.INTRO_WALLET_SCREEN}
//         component={IntroWalletScreen}
//       /> */}

//       <Stack.Screen
//         options={{
//           headerShown: false,
//           animationEnabled: true,
//         }}
//         name={KEY_WALLET_SCREEN.CREATE_PASSWORD_WALLET_SCREEN}
//         component={CreatePasswordWalletScreen}
//       />

//       <Stack.Screen
//         options={{
//           headerShown: false,
//           animationEnabled: true,
//         }}
//         name={KEY_WALLET_SCREEN.CREATE_WALLET_SCREEN}
//         component={CreateWalletScreen}
//       />

//       {/* <Stack.Screen
//         options={() => ({
//           tabBarStyle: {
//             display: 'none',
//           },
//           tabBarButton: () => null,
//           headerShown: false,
//           animationEnabled: true,
//         })}
//         name={KEY_PROFILE_SCREEN.BMI_SCREEN}
//         component={BMIScreen}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default WalletStack;
