const router=require('express').Router();
const auth=require("../middleware/auth"); router.use(auth);
const c=require("../controllers/characterController");

router.get("/",c.get);router.post("/create",c.create);router.get("/stats",c.stats);router.put("/equip",c.equip);router.put("/unequip",c.unequip);router.get("/inventory",c.inventory);router.post("/respawn",c.respawn);router.delete("/inventory/:itemId",c.removeItem);module.exports=router;
