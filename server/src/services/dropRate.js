function rollRarity(baseRate){const r=Math.random(); if(r<Number(baseRate||.01))return "legendary";if(r<.08)return "epic";if(r<.3)return "rare";return "common";}
function rollDrop(monster,luck=1){return (monster.dropTable||[]).filter(x=>Math.random()<Number(x.rate||0)*(1+Number(luck)/100)).map(x=>x.itemId);}
module.exports={rollDrop,rollRarity};
