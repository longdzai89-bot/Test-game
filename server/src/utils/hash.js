const bcrypt=require("bcrypt");
const hash=password=>bcrypt.hash(password,12);
const compare=(password,digest)=>bcrypt.compare(password,digest);
module.exports={hash,compare};
