const Character=require("../models/Character");const {success,error}=require("../utils/response");
exports.get=async(req,res)=>success(res,await Character.findOne({userId:req.user._id}));
exports.create=async(req,res)=>{try{return success(res,await Character.create({userId:req.user._id,name:req.body.name}),"Created",201)}catch(e){return error(res,400,e.message)}};
exports.stats=async(req,res)=>success(res,await Character.findOne({userId:req.user._id}));
exports.equip=async(req,res)=>{const c=await Character.findOne({userId:req.user._id});if(!c)return error(res,404,"Character not found");c.equipment[req.body.slot]=req.body.itemId;await c.save();return success(res,c,"Equipped")};
exports.unequip=async(req,res)=>{const c=await Character.findOne({userId:req.user._id});if(!c)return error(res,404,"Character not found");c.equipment[req.body.slot]=null;await c.save();return success(res,c,"Unequipped")};
exports.inventory=async(req,res)=>{const c=await Character.findOne({userId:req.user._id});return success(res,c?.inventory||[])};
exports.removeItem=async(req,res)=>{const c=await Character.findOne({userId:req.user._id});if(!c)return error(res,404,"Character not found");c.inventory=c.inventory.filter(x=>x.itemId!==req.params.itemId);await c.save();return success(res,c.inventory,"Removed")};

exports.respawn=async(req,res)=>{try{const {respawn}=require("../services/respawnService");return success(res,await respawn(req.user._id),"Respawned")}catch(e){return error(res,400,e.message)}};
