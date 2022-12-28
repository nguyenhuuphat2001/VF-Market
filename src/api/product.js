import api from './index';

export const getListProduct = ({search, page = 1, limit = 10}) =>
  api.get('/product/list', {params: {search, page, limit}});

export const getProductDetail = id => api.get(`/product/${id}`);

export const getListMyCar = address => api.get(`/product/my-nft/${address}`);
