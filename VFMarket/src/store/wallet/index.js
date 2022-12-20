import {createSlice} from '@reduxjs/toolkit';
import {
  importWallet,
  getBalanceWallet,
  getTokenBalanceWallet,
  getAllowanceWallet,
  handleIncreaseAllowance,
  handleSignIncreaseAllowanceTx,
  handleBuyTransaction,
  handleSignBuyTransaction,
} from './action';
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
    builder.addCase(handleIncreaseAllowance.fulfilled, (state, action) => {
      state.txIncreaseConfig = action.payload.txIncreaseConfig;
    });
    builder.addCase(handleBuyTransaction.fulfilled, (state, action) => {
      console.log('buy action');
      state.txBuyConfig = action.payload.txBuyConfig;
      state.buyHash = '';
    });
    builder.addCase(handleSignBuyTransaction.fulfilled, (state, action) => {
      console.log('sign buy action');
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

const {disconnectWallet, clearBuyHash} = slice.actions;

export const disconnect = () => async dispatch => {
  try {
    console.log('disconnect .....');
    await storeData(keyStore.PRIVATE_KEY, null);
    return dispatch(disconnectWallet());
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
