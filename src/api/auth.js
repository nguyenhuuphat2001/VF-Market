import api from './index';

export const signUp = data => api.post('/auth/sign-up', data);
export const login = data => api.post('/auth/login', data);

// export const getOTP = data => api.post('/auth/sendActivateCode', data);

export const activeAccount = data => api.post('/auth/activeUser', data);

export const getProfile = () => api.get('/user/profile');
