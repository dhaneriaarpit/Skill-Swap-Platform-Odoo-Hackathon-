const router = require("express").Router();
const { requestSwap, respondToSwap, getUserSwaps } = require("../controllers/swapController");
const auth = require("../utils/authMiddleware");

router.post("/request", auth, requestSwap);
router.put("/respond", auth, respondToSwap);
router.get("/", auth, getUserSwaps);

module.exports = router;
