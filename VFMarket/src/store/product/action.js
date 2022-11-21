import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  getListProduct as getListProductAPI,
  getProductDetail as getProductDetailAPI,
} from '../../api/product';

export const getListProduct = createAsyncThunk(
  'product/list',
  async ({page = 1, limit = 10}) => {
    const response = await getListProductAPI({page, limit});
    console.log('response.data.data: ', response.data.data);
    return response.data.data;
  },
);

export const getListSearchProduct = createAsyncThunk(
  'product/list',
  async ({search, page = 1, limit = 10}) => {
    const response = await getListProductAPI({search, page, limit});
    console.log('response.data.data: ', response.data.data);
    return response.data.data;
  },
);

export const getProductDetail = createAsyncThunk(
  'product/getDetail',
  async id => {
    const response = await getProductDetailAPI(id);
    console.log('response.data.data: ', Object.keys(response.data.data));
    return response.data.data;
  },
);
