const express = require("express");
const { getEnrolledClasses } = require("../controllers/enrolledController");
const { verifyJWT } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/enrolled-classes/:email", verifyJWT, getEnrolledClasses);

module.exports = router;
