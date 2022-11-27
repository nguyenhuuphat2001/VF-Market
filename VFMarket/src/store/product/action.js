import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  getListProduct as getListProductAPI,
  getProductDetail as getProductDetailAPI,
} from '../../api/product';

export const getListProduct = createAsyncThunk(
  'product/list',
  async ({page = 1, limit = 10}) => {
    const response = await getListProductAPI({page, limit});
    return response.data.data.slice(0, 6);
  },
);

export const getListSearchProduct = createAsyncThunk(
  'product/list/search',
  async ({search, page = 1, limit = 10}) => {
    const response = await getListProductAPI({search, page, limit});
    return response.data.data;
  },
);

export const getProductDetail = createAsyncThunk(
  'product/getDetail',
  async id => {
    const response = await getProductDetailAPI(id);
    return response.data.data;
  },
);
