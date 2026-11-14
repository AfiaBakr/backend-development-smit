const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");
 
router.post("/", controller.createStudent);
router.get("/", controller.getStudents);
router.get("/search", controller.getStudentByEmail);
router.get("/by-age", controller.getStudentsByAge);
router.get("/above-age", controller.getStudentsAboveAge);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);
 
module.exports = router;
