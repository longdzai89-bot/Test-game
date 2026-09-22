const Log=require("../models/Log");
let io=null;
function setIO(x){io=x;}
async function broadcastServer(message){if(io)io.emit("server_message",{message,at:new Date()});return Log.create({level:"info",message,meta:{broadcast:true}});}
module.exports={setIO,broadcastServer};
