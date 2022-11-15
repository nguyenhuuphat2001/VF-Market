import {createSlice} from '@reduxjs/toolkit';
import {login, signUp, getOTP, getProfile} from './action';

import {storeData} from '@/utils/storage';
import {KEY_AUTHEN} from '@/constants/enviroments';

import Toast from 'react-native-toast-message';

import {reset} from '@/navigation/navigationUtils';

const INIT_STATE = {
  auth: null,
  isLoading: false,
  tempAccount: null,
  activateCode: '',
  profile: {},
};

// Slice
const slice = createSlice({
  name: 'auth',
  initialState: INIT_STATE,
  reducers: {
    logoutSuccess: (state, action) => {
      state.auth = null;
    },
  },
  extraReducers: builder => {
    // Login
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.auth = true;
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      Toast.show({
        type: 'error',
        text1: 'SDT hoặc mật khẩu không đúng !!!',
        // text2: 'This is some something 👋'
      });
    });
    // Sign up
    builder.addCase(signUp.pending, (state, action) => {
      state.tempAccount = action.meta.arg;
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      console.log('action: ', action.payload);
      state.tempAccount = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      console.log('action: ', action.payload);
      Toast.show({
        type: 'error',
        text1: 'Có gì đó sai sai !!!',
        // text2: 'This is some something 👋'
      });
      state.isLoading = false;
    });
    builder.addCase(getOTP.fulfilled, (state, action) => {
      state.activateCode = action.payload;
    });
    // getProfile
    builder.addCase(getProfile.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.auth = true;
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.isLoading = false;
      console.log('err getProfile: ', action);
    });
  },
});
export default slice.reducer;

const {logoutSuccess} = slice.actions;

export const logout = () => async dispatch => {
  try {
    await storeData(KEY_AUTHEN, null);
    reset({
      index: 0,
      routes: [{name: 'AuthScreen'}],
    });
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
