const ora=require('ora');
let sp;
exports.start=t=>{sp=ora(t).start();return sp};
exports.succeed=t=>sp&&sp.succeed(t);
exports.fail=t=>sp&&sp.fail(t);
exports.update=t=>{if(sp)sp.text=t;return sp};
