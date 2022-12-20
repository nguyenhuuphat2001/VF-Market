import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  importWalletFromPK,
  getWalletBalance,
  useSignIncreaseAllowanceTransaction,
  checkingTransactionReceipt,
} from '../../blockchain/basic';
import {
  getTokenBalance,
  getAllowance,
  useIncreaseAllowance,
} from '../../blockchain/blockchain.erc20';
import {useBuyNFT} from '../../blockchain/blockchain.launchpad';

import {storeData, getData, keyStore} from '@/utils/storage';

import {navigate} from '@/navigation/navigationUtils';
import screen from '@/constants/screen';

export const importWallet = createAsyncThunk(
  'importWallet',
  async privateKey => {
    const wallet = await importWalletFromPK(privateKey);
    navigate(screen.MAIN_SCREEN);
    await storeData(keyStore.PRIVATE_KEY, wallet.privateKey);
    return {address: wallet.address, privateKey: wallet.privateKey};
  },
);

export const getBalanceWallet = createAsyncThunk(
  'getBalance',
  async address => {
    const balance = await getWalletBalance(address);
    return {balance};
  },
);

export const getTokenBalanceWallet = createAsyncThunk(
  'getTokenBalance',
  async address => {
    const tokenBalance = await getTokenBalance(address);
    return {tokenBalance};
  },
);

export const getAllowanceWallet = createAsyncThunk(
  'getTokenAllowance',
  async address => {
    const allowance = await getAllowance(address);
    return {allowance};
  },
);

export const handleIncreaseAllowance = createAsyncThunk(
  'handleIncreaseAllowance',
  async address => {
    const txIncreaseConfig = await useIncreaseAllowance(address);
    return {txIncreaseConfig};
  },
);

export const handleSignIncreaseAllowanceTx = createAsyncThunk(
  'handleSignIncreaseAllowanceTx',
  async ({transactionConfig, privateKey}) => {
    console.log('transactionConfig: ', transactionConfig);
    console.log('privateKey: ', privateKey);
    const hash = await useSignIncreaseAllowanceTransaction(
      transactionConfig,
      privateKey,
    );
    if (hash) {
      try {
        console.log('hash: ', hash);
        const res = await checkingTransactionReceipt(hash);
        console.log('res: ', res);
      } catch (err) {
        console.log('err: ', err);
      }
    }
    return {res};
  },
);

export const handleBuyTransaction = createAsyncThunk(
  'handleBuyTransaction',
  async launchId => {
    const txBuyConfig = await useBuyNFT(launchId);
    return {txBuyConfig};
  },
);

export const handleSignBuyTransaction = createAsyncThunk(
  'handleSignBuyTransaction',
  async ({transactionConfig, privateKey}, thunkApi) => {
    console.log('thunkApi: ', thunkApi);
    const hash = await useSignIncreaseAllowanceTransaction(
      transactionConfig,
      privateKey,
    );
    // if (hash) {
    //   try {
    //     console.log('hash: ', hash);

    //     let intervalId = setInterval(async () => {
    //       const respone = await checkingTransactionReceipt(hash);
    //       if (respone) {
    //         console.log('respone', respone);
    //         clearInterval(intervalId);
    //         return true;
    //       }
    //     }, 2000);
    //     console.log('intervalId', intervalId);
    //   } catch (err) {
    //     console.log('err: ', err);
    //   }
    // }
    return {hash};
  },
);
