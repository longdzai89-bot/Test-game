const {select,ask,confirm}=require("../helpers/prompt");const {printHeader,c}=require("../helpers/color");
async function menu(ctx){printHeader("serverMenu","Admin CLI");await select("Chọn thao tác",["Xem dữ liệu","Thực hiện thao tác","Quay lại"]);return;}
module.exports=menu;
