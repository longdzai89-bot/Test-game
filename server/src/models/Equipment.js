const mongoose=require("mongoose");
module.exports=mongoose.model("Equipment",new mongoose.Schema({
 slot:{type:String,enum:["head","body","legs","feet","weapon","offhand"],required:true},itemId:{type:String,required:true},level:{type:Number,default:1},enhance:{type:Number,default:0},gemSlots:{type:[String],default:[]}
},{timestamps:true}));
