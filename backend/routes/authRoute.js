const express = require("express");
const router = express.Router();
const { setToken, createUser } = require("../controllers/authController");

router.post("/set-token", setToken);
router.post("/new-user", createUser);

module.exports = router;
