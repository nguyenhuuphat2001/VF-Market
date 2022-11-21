import {createSlice} from '@reduxjs/toolkit';
import {getListProduct, getProductDetail} from './action';
import {STATUS} from '@/constants/index';

const INIT_STATE = {
  status: STATUS.FETCHING,
  list: [],
  detail: {},
  totalPage: 1,
};

// Slice
const slice = createSlice({
  name: 'product',
  initialState: INIT_STATE,
  reducers: {
    logoutSuccess: (state, action) => {
      state.auth = null;
    },
  },
  extraReducers: builder => {
    // List Gym
    builder.addCase(getListProduct.pending, (state, action) => {
      state.status = STATUS.FETCHING;
    });
    builder.addCase(getListProduct.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.list = action.payload;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(getListProduct.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      console.log(action.error);
    });

    // Detail Gym
    builder.addCase(getProductDetail.pending, (state, action) => {
      state.status = STATUS.FETCHING;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.detail = action.payload.data;
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      console.log(action.error);
    });
  },
});
export default slice.reducer;
