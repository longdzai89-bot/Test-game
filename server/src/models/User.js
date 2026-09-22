const mongoose=require("mongoose");
const schema=new mongoose.Schema({
 username:{type:String,required:true,unique:true,trim:true,minlength:3,maxlength:32,index:true},
 email:{type:String,required:true,unique:true,lowercase:true,trim:true,index:true},
 passwordHash:{type:String,required:true,select:false},
 role:{type:String,enum:["user","admin"],default:"user",index:true},
 fcmToken:{type:String,default:""},
 banned:{type:Boolean,default:false,index:true},
 lastLogin:{type:Date,default:null},
 createdAt:{type:Date,default:Date.now}
},{timestamps:true,toJSON:{virtuals:true},toObject:{virtuals:true}});
schema.virtual("isAdmin").get(function(){return this.role==="admin";});
module.exports=mongoose.model("User",schema);
