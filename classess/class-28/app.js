const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
 
const app = express();
app.use(express.json());
app.use("/api/students", studentRoutes);
 
app.get("/", (req, res) => {
  res.send("Student Management API is running");
});
 
module.exports = app;

