const { ObjectId } = require("mongodb");
const client = require("../db"); // Assuming you have a separate `db.js` file for MongoDB connection
const classesCollection = client.db("yoga_master").collection("classes");

exports.createClass = async (req, res) => {
  const newClass = req.body;
  newClass.availableSeats = parseInt(newClass.availableSeats);
  const result = await classesCollection.insertOne(newClass);
  res.send(result);
};

exports.getAllClasses = async (req, res) => {
  const query = { status: "approved" };
  const result = await classesCollection.find(query).toArray();
  res.send(result);
};

exports.getClassById = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await classesCollection.findOne(query);
  res.send(result);
};

exports.updateClass = async (req, res) => {
  const id = req.params.id;
  const updatedClass = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      ...updatedClass,
      availableSeats: parseInt(updatedClass.availableSeats),
      status: "pending",
    },
  };
  const result = await classesCollection.updateOne(filter, updateDoc);
  res.send(result);
};

exports.getInstructorClasses = async (req, res) => {
  const email = req.params.email;
  const query = { instructorEmail: email };
  const result = await classesCollection.find(query).toArray();
  res.send(result);
};

exports.changeClassStatus = async (req, res) => {
  const id = req.params.id;
  const { status, reason } = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: { status, reason },
  };
  const result = await classesCollection.updateOne(filter, updateDoc);
  res.send(result);
};
