const mongoose=require("mongoose");
module.exports=mongoose.model("Session",new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},token:{type:String,required:true,index:true},ip:String,userAgent:String,createdAt:{type:Date,default:Date.now},expiresAt:{type:Date,required:true,index:true}
},{timestamps:true}));
