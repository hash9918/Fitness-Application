const { database } = require("../config/database");
const userCollection = database.collection("users");

module.exports = { userCollection };
