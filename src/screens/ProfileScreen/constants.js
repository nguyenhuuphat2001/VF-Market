import {
  PROFILE,
  KEY,
  INFOMATION,
  LOG_OUT,
  HELP,
  DOCUMENT,
} from '@/assets/images/profile';

import {KEY_PROFILE_SCREEN} from '@/navigation/WalletStack';
import CONST_SCREEN from '@/constants/screen';
export const PROFILE_SCREENS = [
  {
    isTitle: true,
    name: 'My account',
  },
  {
    name: 'Information',
    icon: PROFILE,
  },
  {
    name: 'Change password',
    icon: KEY,
    // route: CONST_SCREEN.RECOVERY_PASSWORD
  },

  //

  {
    isTitle: true,
    name: 'VF Market',
    isSecond: true,
  },
  {
    name: 'More info',
    icon: INFOMATION,
  },
  {
    name: 'Help center',
    icon: HELP,
  },
  {
    name: 'Policy',
    icon: DOCUMENT,
  },
  {
    name: 'Log out',
    icon: LOG_OUT,
    isLogOut: true,
  },
];
