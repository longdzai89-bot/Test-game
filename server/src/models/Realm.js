const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 name:{type:String,required:true,unique:true},stage:{type:Number,default:1},expRequired:{type:Number,default:0},
 statBonus:{atk:{type:Number,default:0},def:{type:Number,default:0},hp:{type:Number,default:0},mp:{type:Number,default:0}},
 breakFailRate:{type:Number,default:0,min:0,max:1},breakItems:{type:[String],default:[]}
},{timestamps:true});
module.exports=mongoose.model("Realm",schema);
