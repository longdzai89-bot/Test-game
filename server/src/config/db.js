const mongoose=require("mongoose");
async function connectDB(retries=5,delay=3000){
  for(let i=1;i<=retries;i++){
    try{await mongoose.connect(require("./env").mongoUri); console.log("MongoDB connected"); return;}
    catch(e){console.error(`MongoDB attempt ${i}/${retries}:`,e.message); if(i===retries) throw e; await new Promise(r=>setTimeout(r,delay));}
  }
}
module.exports={connectDB,mongoose};
