const { ObjectId } = require("mongodb");
const client = require("../db");
const enrolledCollection = client.db("yoga_master").collection("enrolled");

exports.getEnrolledClasses = async (req, res) => {
  const email = req.params.email;
  const query = { userEmail: email };
  const pipeline = [
    { $match: query },
    {
      $lookup: {
        from: "classes",
        localField: "classesId",
        foreignField: "_id",
        as: "classes",
      },
    },
    { $unwind: "$classes" },
    {
      $lookup: {
        from: "users",
        localField: "classes.instructorEmail",
        foreignField: "email",
        as: "instructor",
      },
    },
    {
      $project: {
        classes: 1,
        instructor: { $arrayElemAt: ["$instructor", 0] },
      },
    },
  ];
  const result = await enrolledCollection.aggregate(pipeline).toArray();
  res.send(result);
};
