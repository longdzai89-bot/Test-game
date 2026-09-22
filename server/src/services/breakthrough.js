const realms=require("../data/realms.json"); const {rollPercent}=require("../utils/random");
function getBreakRate(c){const r=realms[c.realm-1];return Math.max(5,100-Number(r.breakFailRate||0)*100);}
async function attemptBreakthrough(c){const rate=getBreakRate(c); if(!rollPercent(rate)){onFail(c);return {success:false,newRealm:c.realm,newStage:c.realmStage};} if(c.realmStage<(realms[c.realm-1]?.stages||1)){c.realmStage++;}else if(c.realm<realms.length){c.realm++;c.realmStage=1;} c.exp=0;return {success:true,newRealm:c.realm,newStage:c.realmStage};}
function onFail(c){c.exp=Math.floor(c.exp*.9);}
module.exports={getBreakRate,attemptBreakthrough,onFail};
