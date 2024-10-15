const stripe = require("stripe")(process.env.ACCESS_SECRET);
const client = require("../db");
const paymentCollection = client.db("yoga_master").collection("payments");

exports.createPaymentIntent = async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price) * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "inr",
    payment_method_types: ["card"],
  });
  res.send({ clientSecret: paymentIntent.client_secret });
};

exports.savePaymentInfo = async (req, res) => {
  const paymentInfo = req.body;
  const result = await paymentCollection.insertOne(paymentInfo);
  res.send(result);
};

exports.getPaymentHistory = async (req, res) => {
  const email = req.params.email;
  const query = { userEmail: email };
  const payments = await paymentCollection
    .find(query)
    .sort({ date: -1 })
    .toArray();
  res.send(payments);
};
