// import CONST_SCREEN from '@/constants/screen';

// import RecoveryPasswordScreen from '@/screens/AuthScreen/RecoveryPassword';

// import UpdatePersonalInfoScreen from '@/screens/UpdateInfo';
// import AvatarCameraScreen from '@/screens/AuthScreen/AvatarCamera';

// import GymDetailScreen from '@/screens/GymDetailScreen';
// import OrderPackagesScreen from '@/screens/Order/OrderPackagesScreen';
// import OrderPaymentScreen from '@/screens/Order/OrderPaymentScreen';
// import OrderSuccessScreen from '@/screens/Order/OrderSuccessScreen';
// import SearchScreen from '@/screens/SearchScreen';

// export const route = [
//   {
//     name: CONST_SCREEN.AVATAR_CAMERA,
//     component: AvatarCameraScreen,
//   },
//   {
//     name: CONST_SCREEN.RECOVERY_PASSWORD,
//     component: RecoveryPasswordScreen,
//   },
//   {
//     name: CONST_SCREEN.UPDATE_PERSONAL_INFO,
//     component: UpdatePersonalInfoScreen,
//   },
//   {
//     name: CONST_SCREEN.GYM_DETAIL,
//     component: GymDetailScreen,
//     configShareElement: (route, otherRoute, showing) => {
//       const item = route.params;
//       return [
//         {
//           id: `item.${item?._id}.photo`,
//           animation: 'fade-out',
//           resize: 'cover',
//         //   align: 'left-top',
//         },
//       ];
//     },
//   },
//   {
//     name: CONST_SCREEN.SEARCH,
//     component: SearchScreen,
//   },
//   {
//     name: CONST_SCREEN.ORDER_PACKAGE,
//     component: OrderPackagesScreen,
//   },
//   {
//     name: CONST_SCREEN.ORDER_PAYMENT,
//     component: OrderPaymentScreen,
//   },
//   {
//     name: CONST_SCREEN.ORDER_SUCCESS,
//     component: OrderSuccessScreen,
//   },
// ];
