import {
  PROFILE,
  KEY,
  INFOMATION,
  LOG_OUT,
  HELP,
  DOCUMENT,
} from '@/assets/images/profile';

import {KEY_PROFILE_SCREEN} from '@/navigation/ProfileStack';
import CONST_SCREEN from '@/constants/screen';
export const PROFILE_SCREENS = [
  {
    isTitle: true,
    name: 'Tài khoản của tôi',
  },
  {
    name: 'Thông tin tài khoản',
    icon: PROFILE,
  },
  {
    name: 'Đổi mật khẩu',
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
    name: 'Hiểu hơn về VF Market',
    icon: INFOMATION,
  },
  {
    name: 'Trung tâm trợ giúp',
    icon: HELP,
  },
  {
    name: 'Chính sách / Điều khoản',
    icon: DOCUMENT,
  },
  {
    name: 'Đăng xuất',
    icon: LOG_OUT,
    isLogOut: true,
  },
];
