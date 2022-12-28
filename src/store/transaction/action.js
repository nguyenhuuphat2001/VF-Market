import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  getListTransactions as getListTransactionsAPI,
  useTopUp as useTopUpAPI,
} from '../../api/transaction';

export const getListTransactions = createAsyncThunk(
  'transaction/list',
  async ({search, page = 1, limit = 10}) => {
    const response = await getListTransactionsAPI({search, page, limit});
    return response.data.data;
  },
);

export const useTopUp = createAsyncThunk('transaction/topUp', async address => {
  const response = await useTopUpAPI(address);
  return response.data.data;
});
