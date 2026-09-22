function success(res,data=null,message="OK",code=200){return res.status(code).json({success:true,data,message});}
function error(res,code=500,message="Internal server error",details=null){return res.status(code).json({success:false,data:details,message});}
module.exports={success,error};
