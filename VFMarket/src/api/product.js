import api from './index';

export const getListProduct = ({page = 1, limit = 10}) =>
  api.get('/product/list', {params: {page, limit}});

export const getProductDetail = id => api.get(`/gym/${id}`);
