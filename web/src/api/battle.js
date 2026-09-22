import api from './client';
export const pvpChallenge=(...a)=>api.get('/battle',...a);
export const pvpResult=(...a)=>api.get('/battle',...a);
export const pveFight=(...a)=>api.get('/battle',...a);
export const arenaLeaderboard=(...a)=>api.get('/battle',...a);