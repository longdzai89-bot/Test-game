const dotenv=require("dotenv");
dotenv.config({path:process.env.ENV_FILE||".env"});
function required(name){if(!process.env[name]) throw new Error(`Missing environment variable: ${name}`); return process.env[name];}
module.exports={
  nodeEnv:process.env.NODE_ENV||"development",
  port:Number(process.env.PORT||3001),
  mongoUri:required("MONGODB_URI"),
  jwtSecret:required("JWT_SECRET"),
  jwtRefreshSecret:required("JWT_REFRESH_SECRET"),
  jwtExpiresIn:process.env.JWT_EXPIRES_IN||"15m",
  jwtRefreshExpiresIn:process.env.JWT_REFRESH_EXPIRES_IN||"30d",
  corsOrigins:(process.env.CORS_ORIGINS||"http://localhost:5173").split(",").map(x=>x.trim()),
  allowRegister:(process.env.ALLOW_REGISTER??"true")==="true",
  expMultiplier:Number(process.env.EXP_MULTIPLIER||1),
  dropMultiplier:Number(process.env.DROP_MULTIPLIER||1)
};
