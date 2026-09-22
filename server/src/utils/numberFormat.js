const compact=new Intl.NumberFormat("vi-VN",{notation:"compact",maximumFractionDigits:1});
const normal=new Intl.NumberFormat("vi-VN");
module.exports={formatGold:n=>normal.format(Number(n||0)),formatExp:n=>normal.format(Number(n||0)),shortNumber:n=>compact.format(Number(n||0))};
