const mongoose=require("mongoose");
module.exports=mongoose.model("Pet",new mongoose.Schema({
 petId:{type:String,required:true,unique:true},name:{type:String,required:true},rarity:{type:String,default:"common"},skills:{type:[String],default:[]},statBonus:{type:Object,default:{}},loyalty:{type:Number,default:100},exp:{type:Number,default:0}
},{timestamps:true}));
