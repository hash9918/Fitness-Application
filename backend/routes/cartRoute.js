const express = require("express");
const {
  addToCart,
  getCartByUser,
  deleteCartItem,
} = require("../controllers/cartController");
const { verifyJWT } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add-to-cart", verifyJWT, addToCart);
router.get("/cart/:email", verifyJWT, getCartByUser);
router.delete("/delete-cart-item/:id", verifyJWT, deleteCartItem);

module.exports = router;
