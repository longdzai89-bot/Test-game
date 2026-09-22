import api from './client';
export const list=(...a)=>api.get('/quest',...a);
export const accept=(...a)=>api.get('/quest',...a);
export const complete=(...a)=>api.get('/quest',...a);
export const active=(...a)=>api.get('/quest',...a);