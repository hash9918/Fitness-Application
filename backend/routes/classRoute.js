const express = require("express");
const {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  getInstructorClasses,
  changeClassStatus,
} = require("../controllers/classController");
const {
  verifyJWT,
  verifyInstructor,
  verifyAdmin,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/new-class", verifyJWT, verifyInstructor, createClass);
router.get("/classes", getAllClasses);
router.get("/class/:id", getClassById);
router.put("/update-class/:id", verifyJWT, verifyInstructor, updateClass);
router.get(
  "/classes/:email",
  verifyJWT,
  verifyInstructor,
  getInstructorClasses
);
router.put("/change-status/:id", verifyJWT, verifyAdmin, changeClassStatus);

module.exports = router;
