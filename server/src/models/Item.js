const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 itemId:{type:String,required:true,unique:true,index:true},name:{type:String,required:true},type:{type:String,required:true,index:true},
 rarity:{type:String,enum:["common","rare","epic","legendary"],default:"common",index:true},
 stats:{atk:{type:Number,default:0},def:{type:Number,default:0},hp:{type:Number,default:0},mp:{type:Number,default:0},spd:{type:Number,default:0}},
 description:{type:String,default:""},dropRate:{type:Number,default:0},sellPrice:{type:Number,default:0},craftRecipe:{type:Array,default:[]}
},{timestamps:true}); module.exports=mongoose.model("Item",schema);
