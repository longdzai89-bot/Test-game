const Battle=require("../models/Battle");
async function initBattle(attacker,defender){const b=await Battle.create({type:"pvp",participants:[attacker._id,defender._id],log:[]});return b;}
function calcTurn(s){const d=Math.max(1,(s.attacker?.atk||10)-(s.defender?.def||0)); const entry={attacker:s.attacker?._id,damage:d,at:new Date()}; s.log=(s.log||[]).concat(entry); return entry;}
async function resolveBattle(session){return session;}
function applyBattleReward(character,rewards){character.gold+=Number(rewards?.gold||0);character.exp+=Number(rewards?.exp||0);return character;}
module.exports={initBattle,calcTurn,resolveBattle,applyBattleReward};
