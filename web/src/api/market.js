import api from './client';
export const list=(...a)=>api.get('/market',...a);
export const sell=(...a)=>api.get('/market',...a);
export const buy=(...a)=>api.get('/market',...a);
export const cancel=(...a)=>api.get('/market',...a);