const { ObjectId } = require("mongodb");
const client = require("../db");
const cartCollection = client.db("yoga_master").collection("cart");

exports.addToCart = async (req, res) => {
  const newCartItem = req.body;
  const result = await cartCollection.insertOne(newCartItem);
  res.send(result);
};

exports.getCartByUser = async (req, res) => {
  const email = req.params.email;
  const query = { userMail: email };
  const cartItems = await cartCollection.find(query).toArray();
  res.send(cartItems);
};

exports.deleteCartItem = async (req, res) => {
  const id = req.params.id;
  const query = { classId: id };
  const result = await cartCollection.deleteOne(query);
  res.send(result);
};
