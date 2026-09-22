const router=require('express').Router();
const auth=require("../middleware/auth"); router.use(auth);
const c=require("../controllers/cultivationController");

router.get("/",c.index);router.get("/status",c.status);router.post("/collect",c.collect);router.post("/breakthrough",c.breakthrough);router.post("/use-pill",c.usePill);
router.post("/pvp/challenge",c.challenge);router.get("/pvp/result/:battleId",c.result);router.post("/pve/fight",c.fight);router.get("/arena/leaderboard",c.index);router.post("/arena/enter",c.enter);
router.post("/enter",c.enter);router.post("/floor/next",c.nextFloor);router.post("/floor/fight",c.fight);router.get("/result/:sessionId",c.result);
router.post("/create",c.create);router.post("/join",c.join);router.post("/leave",c.leave);router.get("/my",c.my);router.put("/fund/donate",c.donate);
router.post("/sell",c.sell);router.post("/buy",c.buy);router.delete("/:listingId",c.cancel);
router.post("/capture",c.capture);router.put("/equip",c.equip);router.post("/feed",c.feed);router.get("/skills/:petId",c.skills);
router.post("/accept",c.accept);router.post("/complete",c.complete);router.get("/active",c.active);
router.get("/realm",c.realm);router.get("/pvp",c.pvp);router.get("/wealth",c.wealth);router.get("/sect",c.sect);
router.put("/:id/read",c.read);router.put("/read-all",c.readAll);router.delete("/:id",c.remove);
module.exports=router;
