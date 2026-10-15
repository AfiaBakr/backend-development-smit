// Import named and default exports
import calculateTotal, { getFullName } from "./studentTools.js";

// Sample student data
const fullName = getFullName("Sara", "Ahmed");
const totalMarks = calculateTotal(85, 90, 78, 92);

// Display results
console.log("Student Full Name:", fullName);
console.log("Total Marks:", totalMarks);