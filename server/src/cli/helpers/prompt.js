const inquirer=require("inquirer");
async function ask(message){return (await inquirer.prompt([{type:"input",name:"v",message}])).v;}
async function select(message,choices){return (await inquirer.prompt([{type:"list",name:"v",message,choices}])).v;}
async function confirm(message){return (await inquirer.prompt([{type:"confirm",name:"v",message,default:false}])).v;}
async function askNumber(message,min=0,max=Number.MAX_SAFE_INTEGER){const a=await ask(message);const n=Number(a);if(!Number.isFinite(n)||n<min||n>max)throw new Error("Số không hợp lệ");return n;}
module.exports={ask,select,confirm,askNumber};
