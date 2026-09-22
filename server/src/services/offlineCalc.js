const {calcOfflineExp,applyExp}=require("./cultivationEngine");
async function sync(character){const exp=calcOfflineExp(character);applyExp(character,exp);character.offlineExpAccum=exp;character.lastOnline=new Date();await character.save();return character;}
module.exports={sync};
