
const EventEmitter = require("events");

// Create EventEmitter object
const registration = new EventEmitter();

// Register event listener
registration.on("studentRegistered", (student) => {

  console.log(
    `Registration successful! Student ID: ${student.id}, Name: ${student.name}`
  );

  // Schedule reminder after 3 seconds
  setTimeout(() => {
    console.log(
      `Reminder: Welcome ${student.name}! Your registration is complete.`
    );
  }, 3000);

});

// Registration function
function registerStudent(id, name) {

  registration.emit("studentRegistered", {
    id: id,
    name: name
  });

}

// Register two sample students
registerStudent(101, "Ali");
registerStudent(102, "Sara");

//Part B

const fs = require("fs");
const path = require("path");

console.log("\n===== File Streams =====");

// File paths
const inputFile = path.join(__dirname, "large.txt");
const outputFile = path.join(__dirname, "copy.txt");


// Part B1: Readable Stream


console.log("\n===== Reading Large File =====");

const readStream = fs.createReadStream(inputFile, {
  encoding: "utf8",
  highWaterMark: 30
});

readStream.on("data", (chunk) => {
  console.log("Received Chunk:");
  console.log(chunk);
});

readStream.on("end", () => {
  console.log("File reading completed successfully.");
});

readStream.on("error", (error) => {
  console.log("Read Error:", error.message);
});


// Part B2: Copy Using Pipe


const copyReadStream = fs.createReadStream(inputFile);

const writeStream = fs.createWriteStream(outputFile);

// Handle reading errors
copyReadStream.on("error", (error) => {
  console.log("Copy Read Error:", error.message);
  writeStream.destroy();
});

// Handle writing errors
writeStream.on("error", (error) => {
  console.log("Write Error:", error.message);
});

// Copy file using pipe
copyReadStream.pipe(writeStream);

// Display success after copying
writeStream.on("finish", () => {
  console.log("\nFile copied successfully!");
  console.log("Source File: large.txt");
  console.log("Destination File: copy.txt");
});
