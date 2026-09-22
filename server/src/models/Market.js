const mongoose=require("mongoose");
module.exports=mongoose.model("Market",new mongoose.Schema({
 sellerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,index:true},itemId:{type:String,required:true,index:true},qty:{type:Number,min:1,required:true},price:{type:Number,min:1,required:true},listedAt:{type:Date,default:Date.now},sold:{type:Boolean,default:false,index:true}
},{timestamps:true}));
