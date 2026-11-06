
const os = require("os");
const path = require("path");
const fs = require("fs");


// Part 1: Computer Information


console.log("===== Computer Information =====");

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());

console.log(
  "Total Memory:",
  (os.totalmem() / (1024 ** 3)).toFixed(2),
  "GB"
);

console.log(
  "Free Memory:",
  (os.freemem() / (1024 ** 3)).toFixed(2),
  "GB"
);

console.log("Home Directory:", os.homedir());


// Part 2: Create Data Folder


const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("\nData folder created.");
} else {
  console.log("\nData folder already exists.");
}


// Part 3: Build File Path


const filePath = path.join(dataFolder, "student-notes.txt");

console.log("\nFile Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));


// Part 4: Write Notes


const notes = `I learned Node.js runtime and npm.
I learned how to use CommonJS modules.
I learned about os, path and fs modules.`;

fs.writeFileSync(filePath, notes);

console.log("\nStudent notes file created.");


// Part 5: Read Notes


console.log("\n===== Original Notes =====");

let fileContent = fs.readFileSync(filePath, "utf8");

console.log(fileContent);


// Part 6: Append New Line


fs.appendFileSync(
  filePath,
  "\nI also learned how to manage files using Node.js."
);

console.log("\n===== Updated Notes =====");

fileContent = fs.readFileSync(filePath, "utf8");

console.log(fileContent);


// Part 7: Rename File


const renamedPath = path.join(dataFolder, "class-notes.txt");

fs.renameSync(filePath, renamedPath);

console.log("\nFile renamed to class-notes.txt");


// Part 8: Temporary File


const tempPath = path.join(dataFolder, "temp.txt");

fs.writeFileSync(tempPath, "This is a temporary file.");

console.log("\nTemporary file created.");

fs.unlinkSync(tempPath);

console.log("Temporary file deleted.");

console.log("\nQuestion 2 completed successfully!");
