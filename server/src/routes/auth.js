const router=require('express').Router();
const c=require("../controllers/authController");

router.post("/register",(req,res,next)=>{if(!req.body.username||!req.body.email||!req.body.password)return res.status(400).json({success:false,message:"Missing fields"});next()},c.register);
router.post("/login",c.login);router.post("/logout",c.logout);router.get("/me",auth,c.me);router.post("/refresh-token",c.refreshToken);router.post("/change-password",auth,c.changePassword);
module.exports=router;
