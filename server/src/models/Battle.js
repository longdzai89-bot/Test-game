const mongoose=require("mongoose");
module.exports=mongoose.model("Battle",new mongoose.Schema({
 type:{type:String,required:true,index:true},participants:{type:[mongoose.Schema.Types.ObjectId],ref:"Character",default:[]},log:{type:[Object],default:[]},winner:{type:mongoose.Schema.Types.ObjectId,ref:"Character",default:null},createdAt:{type:Date,default:Date.now}
},{timestamps:true}));
