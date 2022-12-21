import api from './index';

export const getListTransactions = ({search, page = 1, limit = 10}) =>
  api.get('/transaction/list', {params: {search, page, limit}});
