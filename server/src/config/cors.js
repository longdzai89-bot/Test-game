const cors=require("cors");
const env=require("./env");
module.exports=cors({
  origin(origin,cb){if(!origin||env.corsOrigins.includes("*")||env.corsOrigins.includes(origin)) return cb(null,true); cb(new Error("CORS origin not allowed"));},
  credentials:true
});
