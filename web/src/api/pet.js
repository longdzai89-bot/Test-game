import api from './client';
export const list=(...a)=>api.get('/pet',...a);
export const capture=(...a)=>api.get('/pet',...a);
export const equip=(...a)=>api.get('/pet',...a);
export const feed=(...a)=>api.get('/pet',...a);
export const skills=(...a)=>api.get('/pet',...a);