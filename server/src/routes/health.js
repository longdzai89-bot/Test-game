const router=require("express").Router();router.get("/health",(req,res)=>res.json({status:"ok",uptime:process.uptime(),memory:process.memoryUsage()}));module.exports=router;
