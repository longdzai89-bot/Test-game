import api from './client';
export const register=(...a)=>api.get('/auth',...a);
export const login=(...a)=>api.get('/auth',...a);
export const logout=(...a)=>api.get('/auth',...a);
export const me=(...a)=>api.get('/auth',...a);
export const changePassword=(...a)=>api.get('/auth',...a);
export const refreshToken=(...a)=>api.get('/auth',...a);