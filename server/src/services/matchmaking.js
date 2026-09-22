const Character=require("../models/Character"); const queue=[];
async function findOpponent(c){return Character.findOne({_id:{$ne:c._id},realm:{$gte:Math.max(1,c.realm-1),$lte:c.realm+1}});}
function queueArena(id){if(!queue.includes(String(id)))queue.push(String(id));return queue.length;}
function dequeue(id){const i=queue.indexOf(String(id));if(i>=0)queue.splice(i,1);return queue.length;}
module.exports={findOpponent,queueArena,dequeue};
