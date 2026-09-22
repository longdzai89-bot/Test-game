const User=require("../models/User"); const Notification=require("../models/Notification"); const {admin}=require("../config/push");
async function sendToUser(userId,payload){const n=await Notification.create({userId,...payload});const u=await User.findById(userId);if(admin.apps.length&&u?.fcmToken)await admin.messaging().send({token:u.fcmToken,notification:{title:payload.title,body:payload.body},data:Object.fromEntries(Object.entries(payload.data||{}).map(([k,v])=>[k,String(v)]))});return n;}
async function sendToAll(payload){const users=await User.find({}, "_id");return Promise.all(users.map(u=>sendToUser(u._id,payload)));}
async function sendToSect(sectId,payload){const Sect=require("../models/Sect");const s=await Sect.findById(sectId);return Promise.all((s?.members||[]).map(id=>sendToUser(id,payload)));}
module.exports={sendToUser,sendToAll,sendToSect};
