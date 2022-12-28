import CONST_SCREEN from '@/constants/screen';

// import RecoveryPasswordScreen from '@/screens/AuthScreen/RecoveryPassword';

// import UpdatePersonalInfoScreen from '@/screens/UpdateInfo';

import DetailCarScreen from '@/screens/DetailCarScreen';
import SearchScreen from '@/screens/SearchScreen';
import IntroWalletScreen from '@/screens/IntroWalletScreen';
import CreatePasswordWalletScreen from '@/screens/CreatePasswordWalletScreen';
import CreateWalletScreen from '@/screens/CreateWalletScreen';
import ImportWalletScreen from '@/screens/ImportWalletScreen';

export const route = [
  //   {
  //     name: CONST_SCREEN.RECOVERY_PASSWORD,
  //     component: RecoveryPasswordScreen,
  //   },
  //   {
  //     name: CONST_SCREEN.UPDATE_PERSONAL_INFO,
  //     component: UpdatePersonalInfoScreen,
  //   },
  {
    name: CONST_SCREEN.DETAIL_CAR,
    component: DetailCarScreen,
    configShareElement: (route, otherRoute, showing) => {
      const item = route.params;
      return [
        {
          id: `item.${item?._id}.photo`,
          animation: 'fade-out',
          resize: 'cover',
          align: 'left-top',
        },
      ];
    },
  },
  {
    name: CONST_SCREEN.SEARCH,
    component: SearchScreen,
  },
  {
    name: CONST_SCREEN.INTRO_WALLET_SCREEN,
    component: IntroWalletScreen,
  },
  {
    name: CONST_SCREEN.CREATE_PASSWORD_WALLET_SCREEN,
    component: CreatePasswordWalletScreen,
  },
  {
    name: CONST_SCREEN.CREATE_WALLET_SCREEN,
    component: CreateWalletScreen,
  },
  {
    name: CONST_SCREEN.IMPORT_WALLET_SCREEN,
    component: ImportWalletScreen,
  },
];
