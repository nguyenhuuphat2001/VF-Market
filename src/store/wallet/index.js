import {createSlice} from '@reduxjs/toolkit';
import {
  importWallet,
  getBalanceWallet,
  getTokenBalanceWallet,
  getAllowanceWallet,
  handleIncreaseAllowance,
  handleSignApproveTransaction,
  handleBuyTransaction,
  handleSignBuyTransaction,
} from './action';
import Toast from 'react-native-toast-message';
import {WALLET_STATUS} from '@/constants/index';

import {storeData, keyStore} from '@/utils/storage';

const INIT_STATE = {
  status: WALLET_STATUS.READY,
  balance: '0',
  tokenBalance: '0',
  // password: '',
  currentAccount: '',
  currentNetwork: '',
  currentPrivateKey: '',
  allowance: '0',
  txIncreaseConfig: {},
  txBuyConfig: {},
  currentStep: 0,
  increaseHash: '',
  buyHash: '',
};

// Slice
const slice = createSlice({
  name: 'wallet',
  initialState: INIT_STATE,
  reducers: {
    disconnectWallet: (state, action) => {
      state.currentAccount = null;
      state.currentPrivateKey = null;
    },
    clearApproveHash: (state, action) => {
      state.increaseHash = '';
    },
    clearBuyHash: (state, action) => {
      state.buyHash = '';
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
      state.currentStep = 1;
    });
    builder.addCase(importWallet.rejected, (state, action) => {
      state.status = STATUS.READY;
      console.log(action.error);
    });

    builder.addCase(getBalanceWallet.fulfilled, (state, action) => {
      state.balance = action.payload.balance;
    });
    builder.addCase(getTokenBalanceWallet.fulfilled, (state, action) => {
      state.tokenBalance = action.payload.tokenBalance;
    });
    builder.addCase(getAllowanceWallet.fulfilled, (state, action) => {
      state.allowance = action.payload.allowance;
      if (action.payload.allowance) {
        state.currentStep = 2;
      }
    });
    // Increase Allowance
    builder.addCase(handleIncreaseAllowance.fulfilled, (state, action) => {
      state.txIncreaseConfig = action.payload.txIncreaseConfig;
    });
    builder.addCase(handleIncreaseAllowance.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text1: 'Please check balance wallet',
      });
      state.txIncreaseConfig = {};
    });

    builder.addCase(handleSignApproveTransaction.fulfilled, (state, action) => {
      state.txIncreaseConfig = {};
      state.increaseHash = action.payload.hash;
    });
    // Buy
    builder.addCase(handleBuyTransaction.fulfilled, (state, action) => {
      state.txBuyConfig = action.payload.txBuyConfig;
      state.buyHash = '';
    });
    builder.addCase(handleBuyTransaction.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text1: 'Please check balance wallet',
      });
      state.txBuyConfig = {};
      state.buyHash = '';
    });
    builder.addCase(handleSignBuyTransaction.fulfilled, (state, action) => {
      state.txBuyConfig = {};
      state.buyHash = action.payload.hash;
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

const {disconnectWallet, clearBuyHash, clearApproveHash} = slice.actions;

export const disconnect = () => async dispatch => {
  try {
    console.log('disconnect .....');
    await storeData(keyStore.PRIVATE_KEY, null);
    return dispatch(disconnectWallet());
  } catch (e) {
    return console.error(e.message);
  }
};

export const clearApproveTransaction = () => async dispatch => {
  try {
    return dispatch(clearApproveHash());
  } catch (e) {
    return console.error(e.message);
  }
};

export const clearBuyTransaction = () => async dispatch => {
  try {
    return dispatch(clearBuyHash());
  } catch (e) {
    return console.error(e.message);
  }
};
