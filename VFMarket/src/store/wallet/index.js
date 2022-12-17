import {createSlice} from '@reduxjs/toolkit';
import {
  importWallet,
  getBalanceWallet,
  getTokenBalanceWallet,
  getAllowanceWallet,
} from './action';
import {WALLET_STATUS} from '@/constants/index';

import {storeData, keyStore} from '@/utils/storage';

const INIT_STATE = {
  status: WALLET_STATUS.READY,
  balance: '0',
  // value: '0',
  // tokenValue: '0',
  tokenBalance: '0',
  // password: '',
  currentAccount: '',
  currentNetwork: '',
  currentPrivateKey: '',
  allowance: '0',
};

// Slice
const slice = createSlice({
  name: 'wallet',
  initialState: INIT_STATE,
  reducers: {
    disconnectWallet: (state, action) => {
      console.log('disconnect success');
      state.currentAccount = null;
      state.currentPrivateKey = null;
    },
  },
  extraReducers: builder => {
    // List product
    builder.addCase(importWallet.pending, (state, action) => {
      state.status = WALLET_STATUS.PENDING;
    });
    builder.addCase(importWallet.fulfilled, (state, action) => {
      state.status = WALLET_STATUS.READY;
      console.log('success: ', action.payload);
      state.currentAccount = action.payload.address;
      state.currentPrivateKey = action.payload.privateKey;
      // state.totalPage = action.payload.totalPage;
    });
    builder.addCase(importWallet.rejected, (state, action) => {
      state.status = STATUS.READY;
      console.log(action.error);
    });

    builder.addCase(getBalanceWallet.fulfilled, (state, action) => {
      state.balance = action.payload.balance;
    });
    builder.addCase(getTokenBalanceWallet.fulfilled, (state, action) => {
      state.tokenBalance = action.payload.balance;
    });
    builder.addCase(getAllowanceWallet.fulfilled, (state, action) => {
      state.allowance = action.payload.balance;
    });
    //   builder.addCase(getListSearchProduct.fulfilled, (state, action) => {
    //     state.status = STATUS.SUCCESS;
    //     state.listSearch = action.payload;
    //     state.totalPageSearch = action.payload.totalPage;
    //   });
    //   builder.addCase(getListSearchProduct.rejected, (state, action) => {
    //     state.status = STATUS.ERROR;
    //     console.log(action.error);
    //   });

    //   // Detail product
    //   builder.addCase(getProductDetail.pending, (state, action) => {
    //     state.status = STATUS.FETCHING;
    //   });
    //   builder.addCase(getProductDetail.fulfilled, (state, action) => {
    //     state.status = STATUS.SUCCESS;
    //     state.detail = action.payload.data;
    //   });
    //   builder.addCase(getProductDetail.rejected, (state, action) => {
    //     state.status = STATUS.ERROR;
    //     console.log(action.error);
    //   });
  },
});
export default slice.reducer;

const {disconnectWallet} = slice.actions;

export const disconnect = () => async dispatch => {
  try {
    console.log('disconnect .....');
    await storeData(keyStore.PRIVATE_KEY, null);
    return dispatch(disconnectWallet());
  } catch (e) {
    return console.error(e.message);
  }
};
