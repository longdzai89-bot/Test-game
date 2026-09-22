const mongoose=require("mongoose");
module.exports=mongoose.model("Ranking",new mongoose.Schema({
 type:{type:String,required:true,index:true},entries:{type:[{userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},score:Number,rank:Number}],default:[]},updatedAt:{type:Date,default:Date.now}
},{timestamps:true}));
