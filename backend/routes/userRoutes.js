const router = require("express").Router();
const { getPublicUsers, updateProfile } = require("../controllers/userController");
const auth = require("../utils/authMiddleware");

router.get("/", getPublicUsers);
router.put("/update", auth, updateProfile);

module.exports = router;
