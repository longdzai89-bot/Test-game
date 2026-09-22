function randomBetween(min,max){return Math.random()*(max-min)+min;}
function rollPercent(percent){return Math.random()*100<percent;}
function weightedRandom(items){const total=items.reduce((s,x)=>s+Number(x.weight||0),0); if(!total)return null; let r=Math.random()*total; for(const x of items){r-=Number(x.weight||0);if(r<=0)return x.value;} return items.at(-1)?.value;}
module.exports={randomBetween,rollPercent,weightedRandom};
