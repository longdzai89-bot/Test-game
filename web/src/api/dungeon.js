import api from './client';
export const list=(...a)=>api.get('/dungeon',...a);
export const enter=(...a)=>api.get('/dungeon',...a);
export const nextFloor=(...a)=>api.get('/dungeon',...a);
export const fight=(...a)=>api.get('/dungeon',...a);
export const result=(...a)=>api.get('/dungeon',...a);