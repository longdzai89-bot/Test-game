const rateLimit=require("express-rate-limit");
const env=require("../config/env");
const general=rateLimit({windowMs:Number(process.env.RATE_LIMIT_WINDOW_MS||900000),limit:Number(process.env.RATE_LIMIT_MAX||100),standardHeaders:"draft-7",legacyHeaders:false});
const login=rateLimit({windowMs:60000,limit:5,standardHeaders:"draft-7",legacyHeaders:false});
module.exports={general,login};
