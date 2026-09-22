const realms=require("../data/realms.json"); const env=require("../config/env");
function realmData(c){return realms[c.realm-1]||realms[0];}
function calcExpPerSec(c){const r=realmData(c);return Math.max(1,Math.floor((r.id*10+c.realmStage*3+Number(c.atk||0)/20)*env.expMultiplier));}
function calcOfflineExp(c){const seconds=Math.min(8*3600,Math.max(0,(Date.now()-new Date(c.lastOnline||Date.now()).getTime())/1000));return Math.floor(seconds*calcExpPerSec(c));}
function applyExp(c,exp){c.exp+=Math.max(0,exp); c.expPerSec=calcExpPerSec(c); return c;}
function checkBreakthrough(c){const r=realmData(c); const req=r.expPerStage[Math.min(c.realmStage-1,r.expPerStage.length-1)]; return {canBreak:c.exp>=req,required:req,failReason:c.exp<req?"Chưa đủ tu vi":""};}
module.exports={calcExpPerSec,calcOfflineExp,applyExp,checkBreakthrough};
