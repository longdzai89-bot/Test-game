const jwt=require("jsonwebtoken"); const env=require("../config/env");
function sign(payload){return jwt.sign(payload,env.jwtSecret,{expiresIn:env.jwtExpiresIn});}
function verify(token){return jwt.verify(token,env.jwtSecret);}
function refresh(payload){return jwt.sign(payload,env.jwtRefreshSecret,{expiresIn:env.jwtRefreshExpiresIn});}
function verifyRefresh(token){return jwt.verify(token,env.jwtRefreshSecret);}
module.exports={sign,verify,refresh,verifyRefresh};
