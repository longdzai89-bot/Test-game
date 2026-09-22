module.exports=(err,req,res,next)=>{require("../config/logger").error(err.stack||err.message);res.status(err.status||500).json({success:false,message:err.message||"Internal server error"});};
