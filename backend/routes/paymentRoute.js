const express = require("express");
const {
  createPaymentIntent,
  savePaymentInfo,
  getPaymentHistory,
} = require("../controllers/paymentController");
const { verifyJWT } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/create-payment-intent", verifyJWT, createPaymentIntent);
router.post("/payment-info", verifyJWT, savePaymentInfo);
router.get("/payment-history/:email", verifyJWT, getPaymentHistory);

module.exports = router;
