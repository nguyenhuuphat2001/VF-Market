import {createSlice} from '@reduxjs/toolkit';
import {
  getListProduct,
  getListSearchProduct,
  getProductDetail,
  getListMyCar,
} from './action';
import {STATUS} from '@/constants/index';

const INIT_STATE = {
  status: STATUS.FETCHING,
  list: [],
  detail: {},
  totalPage: 1,
  listSearch: [],
  totalPageSearch: 1,
  listMyCar: [],
};

// Slice
const slice = createSlice({
  name: 'product',
  initialState: INIT_STATE,
  // reducers: {
  //   logoutSuccess: (state, action) => {
  //     state.auth = null;
  //   },
  // },
  extraReducers: builder => {
    // List product
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

    builder.addCase(getListSearchProduct.pending, (state, action) => {
      state.status = STATUS.FETCHING;
    });
    builder.addCase(getListSearchProduct.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESS;
      state.listSearch = action.payload;
      state.totalPageSearch = action.payload.totalPage;
    });
    builder.addCase(getListSearchProduct.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      console.log(action.error);
    });

    // Detail product
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

    // My car
    builder.addCase(getListMyCar.pending, (state, action) => {
      state.status = STATUS.FETCHING;
    });
    builder.addCase(getListMyCar.fulfilled, (state, action) => {
      console.log('getListMyCar: ', action.payload.data.length);
      state.status = STATUS.SUCCESS;
      state.listMyCar = action.payload.data;
    });
    builder.addCase(getListMyCar.rejected, (state, action) => {
      state.status = STATUS.ERROR;
      console.log(action.error);
    });
  },
});
export default slice.reducer;
