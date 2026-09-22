import api from './client';
export const list=(...a)=>api.get('/notification',...a);
export const read=(...a)=>api.get('/notification',...a);
export const readAll=(...a)=>api.get('/notification',...a);
export const delete=(...a)=>api.get('/notification',...a);