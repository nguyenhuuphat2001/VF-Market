import React from 'react';

import SignInScreen from './SignIn';
import SignUpStepOneScreen from './SignUp/StepOne';
import SignUpStepTwoScreen from './SignUp/OTP';
import InputGmailScreen from './RecoveryPassword/InputGmail';
import ChangePasswordScreen from './RecoveryPassword/ChangePassword';
import OtpRecoveryScreen from './RecoveryPassword/OTP';
import {createStackNavigator} from '@react-navigation/stack';

import UpdatePersonalInfoScreen from './UpdateInfo';
import AvatarCameraScreen from './AvatarCamera';

import CONST_SCREEN from '@/constants/screen';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  animationEnabled: true,
};

//https://avatars.dicebear.com/api/croodles/patrick.svg
const AuthScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={options}
      name={CONST_SCREEN.SIGN_IN}
      component={SignInScreen}
    />
    <Stack.Screen
      options={options}
      name={CONST_SCREEN.SIGN_UP_STEP_ONE}
      component={SignUpStepOneScreen}
    />

    <Stack.Screen
      options={options}
      name={CONST_SCREEN.OTP}
      component={SignUpStepTwoScreen}
    />

    <Stack.Screen
      options={options}
      name={CONST_SCREEN.INPUT_GMAIL}
      component={InputGmailScreen}
    />
    <Stack.Screen
      options={options}
      name={CONST_SCREEN.OTP_RECOVERY}
      component={OtpRecoveryScreen}
    />
    <Stack.Screen
      options={options}
      name={CONST_SCREEN.CHANGE_PASSWORD}
      component={ChangePasswordScreen}
    />

    <Stack.Screen
      options={options}
      name={CONST_SCREEN.UPDATE_PERSONAL_INFO}
      component={UpdatePersonalInfoScreen}
    />
    <Stack.Screen
      options={options}
      name={CONST_SCREEN.AVATAR_CAMERA}
      component={AvatarCameraScreen}
    />
  </Stack.Navigator>
);

export default AuthScreen;
