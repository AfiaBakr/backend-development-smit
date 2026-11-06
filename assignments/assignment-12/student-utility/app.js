
const {
  getIntroduction,
  calculatePercentage
} = require("./student");

// Student information
const name = "Afia";
const course = "Backend Development";

// Marks
const obtainedMarks = 883;
const totalMarks = 1000;

// Call functions
const introduction = getIntroduction(name, course);

const percentage = calculatePercentage(
  obtainedMarks,
  totalMarks
);

// Display results
console.log("===== Student Information =====");

console.log(introduction);

console.log("Student Name:", name);
console.log("Course:", course);

console.log("Obtained Marks:", obtainedMarks);
console.log("Total Marks:", totalMarks);

console.log("Percentage:", percentage + "%");

// Display Node.js version
console.log("Node.js Version:", process.version);
