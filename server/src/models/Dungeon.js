const mongoose=require("mongoose");
module.exports=mongoose.model("Dungeon",new mongoose.Schema({
 name:{type:String,required:true},realmRequired:{type:Number,default:1},floors:{type:Number,default:5},monsters:{type:[String],default:[]},rewards:{type:[Object],default:[]},cooldown:{type:Number,default:0}
},{timestamps:true}));
