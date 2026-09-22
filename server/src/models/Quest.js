const mongoose=require("mongoose");
module.exports=mongoose.model("Quest",new mongoose.Schema({
 questId:{type:String,required:true,unique:true},name:{type:String,required:true},type:{type:String,required:true},requirements:{type:Object,default:{}},
 rewards:{exp:{type:Number,default:0},gold:{type:Number,default:0},items:{type:Array,default:[]}},repeatable:{type:Boolean,default:false},realmRequired:{type:Number,default:1}
},{timestamps:true}));
