const mongoose=require("mongoose");
const inventoryItem=new mongoose.Schema({itemId:{type:String,required:true},qty:{type:Number,min:0,default:1}},{_id:false});
const equipment=new mongoose.Schema({head:String,body:String,legs:String,feet:String,weapon:String,offhand:String},{_id:false});
const schema=new mongoose.Schema({
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,unique:true,index:true},
 name:{type:String,required:true,trim:true,maxlength:40},
 realm:{type:Number,default:1,index:true}, realmStage:{type:Number,default:1},
 exp:{type:Number,default:0,min:0},expPerSec:{type:Number,default:1,min:0},
 hp:{type:Number,default:100},maxHp:{type:Number,default:100},mp:{type:Number,default:50},maxMp:{type:Number,default:50},
 atk:{type:Number,default:10},def:{type:Number,default:5},spd:{type:Number,default:5},luck:{type:Number,default:1},
 gold:{type:Number,default:0,min:0},spiritStone:{type:Number,default:0,min:0},
 inventory:{type:[inventoryItem],default:[]},equipment:{type:equipment,default:()=>({})},
 skills:{type:[String],default:[]},petId:{type:String,default:null},sectId:{type:mongoose.Schema.Types.ObjectId,ref:"Sect",default:null},
 pvpWin:{type:Number,default:0},pvpLoss:{type:Number,default:0},questsDone:{type:[String],default:[]},
 position:{x:{type:Number,default:0},y:{type:Number,default:0},zone:{type:String,default:"Thanh Chinh"}},respawnPoint:{x:{type:Number,default:0},y:{type:Number,default:0},zone:{type:String,default:"Thanh Chinh"}},isDead:{type:Boolean,default:false},lastOnline:{type:Date,default:Date.now},offlineExpAccum:{type:Number,default:0,min:0}
},{timestamps:true});
schema.index({realm:-1,exp:-1}); schema.methods.touchOnline=function(){this.lastOnline=new Date();return this;};
module.exports=mongoose.model("Character",schema);
