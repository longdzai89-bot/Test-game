const winston=require("winston");
const fs=require("fs");
fs.mkdirSync("logs",{recursive:true});
module.exports=winston.createLogger({
 level:"info",
 format:winston.format.combine(winston.format.timestamp(),winston.format.json()),
 transports:[new winston.transports.Console(),new winston.transports.File({filename:"logs/app.log"})]
});
