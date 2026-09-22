const mongoose=require("mongoose");
module.exports=mongoose.model("Log",new mongoose.Schema({
 level:{type:String,default:"info",index:true},message:{type:String,required:true},meta:{type:Object,default:{}},createdAt:{type:Date,default:Date.now}
},{timestamps:true}));
