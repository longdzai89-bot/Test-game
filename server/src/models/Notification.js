const mongoose=require("mongoose");
module.exports=mongoose.model("Notification",new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},type:{type:String,default:"system"},title:{type:String,required:true},body:{type:String,required:true},data:{type:Object,default:{}},read:{type:Boolean,default:false,index:true},createdAt:{type:Date,default:Date.now}
},{timestamps:true}));
