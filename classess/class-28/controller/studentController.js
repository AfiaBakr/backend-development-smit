const Student = require("../models/studentModel");
const mongoose = require("mongoose");
 
const validId = (id) => mongoose.isValidObjectId(id);
 
// CREATE: POST /api/students
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// READ ALL: GET /api/students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, count: students.length, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// READ ONE: GET /api/students/:id
const getStudentById = async (req, res) => {
  try {
    if (!validId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH BY EMAIL: GET /api/students/search?email=...
const getStudentByEmail = async (req, res) => {
  try {
    if (!req.query.email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    const student = await Student.findOne({ email: req.query.email });
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH EXACT AGE: GET /api/students/by-age?age=20
const getStudentsByAge = async (req, res) => {
  try {
    const age = Number(req.query.age);
    if (!req.query.age || !Number.isFinite(age)) {
      return res.status(400).json({ success: false, message: "Valid age is required" });
    }
    const students = await Student.find({ age: age });
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH AGE >: GET /api/students/above-age?age=18
const getStudentsAboveAge = async (req, res) => {
  try {
    const age = Number(req.query.age);
    if (!req.query.age || !Number.isFinite(age)) {
      return res.status(400).json({ success: false, message: "Valid age is required" });
    }
    const students = await Student.find({ age: { $gt: age } });
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const Student = require("../models/studentModel");
const mongoose = require("mongoose");
 
const validId = (id) => mongoose.isValidObjectId(id);
 
// CREATE: POST /api/students
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({ success: true, data: student });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// READ ALL: GET /api/students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, count: students.length, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// READ ONE: GET /api/students/:id
const getStudentById = async (req, res) => {
  try {
    if (!validId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH BY EMAIL: GET /api/students/search?email=...
const getStudentByEmail = async (req, res) => {
  try {
    if (!req.query.email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    const student = await Student.findOne({ email: req.query.email });
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, data: student });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH EXACT AGE: GET /api/students/by-age?age=20
const getStudentsByAge = async (req, res) => {
  try {
    const age = Number(req.query.age);
    if (!req.query.age || !Number.isFinite(age)) {
      return res.status(400).json({ success: false, message: "Valid age is required" });
    }
    const students = await Student.find({ age: age });
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// SEARCH AGE >: GET /api/students/above-age?age=18
const getStudentsAboveAge = async (req, res) => {
  try {
    const age = Number(req.query.age);
    if (!req.query.age || !Number.isFinite(age)) {
      return res.status(400).json({ success: false, message: "Valid age is required" });
    }
    const students = await Student.find({ age: { $gt: age } });
    res.json({ success: true, data: students });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// UPDATE: PUT /api/students/:id
const updateStudent = async (req, res) => {
  try {
    if (!validId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, message: "Student updated", data: student });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
// DELETE: DELETE /api/students/:id
const deleteStudent = async (req, res) => {
  try {
    if (!validId(req.params.id)) {
      return res.status(400).json({ success: false, message: "Invalid ID" });
    }
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }
    res.json({ success: true, message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 
module.exports = {
  createStudent,
  getStudents,
  getStudentById,
  getStudentByEmail,
  getStudentsByAge,
  getStudentsAboveAge,
  updateStudent,
  deleteStudent
};
