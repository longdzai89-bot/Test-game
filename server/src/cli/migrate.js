const {connectDB}=require("../config/db"); const mongoose=require("mongoose"); require("../models/User"); require("../models/Character");
(async()=>{await connectDB();for(const m of Object.values(mongoose.models))await m.createIndexes();console.log("Indexes created");process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
