const admin=require("firebase-admin");
let app=null;
function initPush(){
  const e=require("./env");
  if(!e.firebaseProjectId && !process.env.FIREBASE_PROJECT_ID) return null;
  if(!admin.apps.length){
    app=admin.initializeApp({credential:admin.credential.cert({
      projectId:process.env.FIREBASE_PROJECT_ID,
      clientEmail:process.env.FIREBASE_CLIENT_EMAIL,
      privateKey:(process.env.FIREBASE_PRIVATE_KEY||"").replace(/\\n/g,"\n")
    })});
  } else app=admin.app();
  return app;
}
module.exports={initPush,admin};
