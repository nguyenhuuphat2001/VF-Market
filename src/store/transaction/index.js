import {createSlice} from '@reduxjs/toolkit';
import {getListTransactions, useTopUp} from './action';
import {STATUS} from '@/constants/index';

const INIT_STATE = {
  status: STATUS.FETCHING,
  list: [],
  totalPage: 1,
  isLoading: false,
};

// Slice
const slice = createSlice({
  name: 'transaction',
  initialState: INIT_STATE,
  reducers: {
    clearListTx: (state, action) => {
      state.list = [];
    },
  },
  extraReducers: builder => {
    // List product
    builder.addCase(getListTransactions.pending, (state, action) => {
      state.status = STATUS.FETCHING;
      // state.isLoading = true;
    });
    builder.addCase(getListTransactions.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.list = action.payload;
      state.totalPage = action.payload.totalPage;
      // state.isLoading = false;
    });
    builder.addCase(getListTransactions.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      // state.isLoading = false;
      console.log(action.error);
    });
    builder.addCase(useTopUp.pending, (state, action) => {
      // state.status = STATUS.FETCHING;
      state.isLoading = true;
    });
    builder.addCase(useTopUp.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.status = STATUS.SUCCESS;
      state.isLoading = false;
    });
    builder.addCase(useTopUp.rejected, (state, action) => {
      // state.status = STATUS.ERROR;
      state.isLoading = false;
      console.log(action.error);
    });
  },
});
export default slice.reducer;

const {clearListTx} = slice.actions;

export const clearListTansactions = () => async dispatch => {
  try {
    return dispatch(clearListTx());
  } catch (e) {
    return console.error(e.message);
  }
};
