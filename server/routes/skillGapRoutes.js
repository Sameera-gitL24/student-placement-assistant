const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { analyzeSkillGap } = require("../controllers/skillGapController");

const router = express.Router();

router.post("/analyze", authMiddleware, analyzeSkillGap);

module.exports = router;