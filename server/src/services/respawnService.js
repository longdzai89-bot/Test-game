const Character=require("../models/Character");

/** Respawn keeps equipment, inventory, currency and progression unchanged. */
exports.respawn=async userId=>{
 const c=await Character.findOne({userId});
 if(!c) throw new Error("Character not found");
 c.isDead=false;
 c.hp=c.maxHp;
 c.mp=c.maxMp;
 c.position={...c.respawnPoint.toObject?.()||c.respawnPoint};
 await c.save();
 return c;
};
