let maintenance=false;
function getStatus(){const m=process.memoryUsage();return {pid:process.pid,uptime:process.uptime(),memory:m.rss,maintenance};}
function setMaintenance(v){maintenance=Boolean(v);return maintenance;}
function reloadConfig(){delete require.cache[require.resolve("../config/env")];return true;}
module.exports={getStatus,setMaintenance,reloadConfig};
