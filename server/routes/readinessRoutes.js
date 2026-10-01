const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
    createOrUpdateReadiness,
    getReadiness
} = require("../controllers/readinessController");

const router = express.Router();

router.post("/", authMiddleware, createOrUpdateReadiness);
router.get("/", authMiddleware, getReadiness);

module.exports = router;