const logger=require("../config/logger");
module.exports=(req,res,next)=>{const started=Date.now();res.on("finish",()=>logger.log(res.statusCode>=400?"error":"info","request",{method:req.method,url:req.originalUrl,status:res.statusCode,ms:Date.now()-started}));next();};
