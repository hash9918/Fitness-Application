const jwt = require("jsonwebtoken");
const { userCollection } = require("../models/userModel");

const setToken = (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: "24h" });
  res.send({ token });
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const result = await userCollection.insertOne(newUser);
  res.send(result);
};

module.exports = { setToken, createUser };
