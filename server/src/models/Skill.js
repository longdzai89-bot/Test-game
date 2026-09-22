const mongoose=require("mongoose");
module.exports=mongoose.model("Skill",new mongoose.Schema({
 skillId:{type:String,required:true,unique:true},name:{type:String,required:true},type:{type:String,required:true},mpCost:{type:Number,default:0},cooldown:{type:Number,default:0},
 effect:{damage:{type:Number,default:0},heal:{type:Number,default:0},buff:{type:Object,default:{}},debuff:{type:Object,default:{}}},realmRequired:{type:Number,default:1}
},{timestamps:true}));
