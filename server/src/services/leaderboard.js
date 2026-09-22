const Character=require("../models/Character");
async function getTopN(type,n=10){let sort={};if(type==="wealth")sort={gold:-1};else if(type==="pvp")sort={pvpWin:-1};else sort={realm:-1,realmStage:-1,exp:-1};return Character.find().sort(sort).limit(n).populate("userId","username");}
async function updateRealmRank(){return true;} async function updatePvpRank(){return true;}
module.exports={updateRealmRank,updatePvpRank,getTopN};
