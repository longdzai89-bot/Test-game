const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex=/^[A-Za-z0-9_]{3,32}$/;
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d).{8,128}$/;
module.exports={isEmail:v=>emailRegex.test(String(v||"")),isUsername:v=>usernameRegex.test(String(v||"")),isPassword:v=>passwordRegex.test(String(v||""))};
