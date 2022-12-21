import {createAsyncThunk} from '@reduxjs/toolkit';

import {getListTransactions as getListTransactionsAPI} from '../../api/transaction';

export const getListTransactions = createAsyncThunk(
  'transaction/list',
  async ({search, page = 1, limit = 10}) => {
    const response = await getListTransactionsAPI({search, page, limit});
    return response.data.data;
  },
);
