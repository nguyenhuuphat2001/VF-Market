// import { loginAPI } from "api/auth";
import {createAsyncThunk} from '@reduxjs/toolkit';

import {setToken} from '../../api';
import {
  signUp as signUpAPI,
  getOTP as getOTPAPI,
  activeAccount as activateAccountAPI,
  login as loginAPI,
  getProfile as getProfileAPI,
} from '../../api/auth';
import screen from '@/constants/screen';

import {storeData, getData, keyStore} from '@/utils/storage';

import {navigate, reset} from '@/navigation/navigationUtils';

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password, isGoToMain}, thunkAPI) => {
    const response = await loginAPI({email, password});
    setToken(response.data.data.accessToken);
    await storeData(keyStore.KEY_AUTHEN, response.data.data.accessToken);
    const profile = await getProfileAPI();
    if (isGoToMain) {
      reset({
        index: 0,
        routes: [{name: screen.MAIN_SCREEN}],
      });
    }

    return profile.data.data;
  },
);

export const signUp = createAsyncThunk(
  'auth/sign-up',
  async (
    {firstName, lastName, password, passwordConfirm, mobileNumber, email},
    thunkAPI,
  ) => {
    const response = await signUpAPI({
      firstName,
      lastName,
      password,
      mobileNumber,
      email,
    });
    navigate(screen.OTP);
    return {response};
  },
);

export const getOTP = createAsyncThunk(
  'auth/getOTP',
  async ({phone}, thunkAPI) => {
    // const response = await loginAPI({ username, password });
    // setToken("trueABC");
    const data = await getOTPAPI({phone});
    return data?.data?.data?.activateCode;
  },
);

export const activeAccount = createAsyncThunk(
  'auth/activeUser',
  async ({email, password, otp}, thunkAPI) => {
    // const response = await loginAPI({ username, password });
    // setToken("trueABC");
    await activateAccountAPI({email, otp});
    thunkAPI.dispatch(login({email, password, isNotGoToMain: true}));
    reset({
      index: 0,
      routes: [{name: screen.MAIN_SCREEN}],
    });
    return true;
  },
);

export const getProfile = createAsyncThunk('user/profile', async () => {
  const token = await getData(keyStore.KEY_AUTHEN);
  setToken(token);
  const response = await getProfileAPI();
  reset({
    index: 0,
    routes: [{name: screen.MAIN_SCREEN}],
  });

  return response.data.data;
});
