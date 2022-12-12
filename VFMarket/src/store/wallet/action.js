import {createAsyncThunk} from '@reduxjs/toolkit';
import {importWalletFromPK, getWalletBalance} from '../../blockchain/basic';
import {getTokenBalance} from '../../blockchain/blockchain.erc20';

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
    const balance = await getTokenBalance(address);
    return {balance};
  },
);
