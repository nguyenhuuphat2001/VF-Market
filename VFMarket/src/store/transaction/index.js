import {createSlice} from '@reduxjs/toolkit';
import {getListTransactions} from './action';
import {STATUS} from '@/constants/index';

const INIT_STATE = {
  status: STATUS.FETCHING,
  list: [],
  totalPage: 1,
};

// Slice
const slice = createSlice({
  name: 'transaction',
  initialState: INIT_STATE,
  // reducers: {
  //   logoutSuccess: (state, action) => {
  //     state.auth = null;
  //   },
  // },
  extraReducers: builder => {
    // List product
    builder.addCase(getListTransactions.pending, (state, action) => {
      state.status = STATUS.FETCHING;
    });
    builder.addCase(getListTransactions.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.list = action.payload;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(getListTransactions.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      console.log(action.error);
    });
  },
});
export default slice.reducer;
