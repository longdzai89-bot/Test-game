const mongoose=require("mongoose");
module.exports=mongoose.model("Sect",new mongoose.Schema({
 name:{type:String,required:true,unique:true},leaderId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},members:{type:[mongoose.Schema.Types.ObjectId],ref:"User",default:[]},
 fund:{type:Number,default:0},level:{type:Number,default:1},description:{type:String,default:""},createdAt:{type:Date,default:Date.now}
},{timestamps:true}));
