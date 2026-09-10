document.getElementById("output1").innerHTML = "Question 2: Student Grade Calculator";

let marks = 85;
let grade;

// Check the marks and assign grade
if (marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 80 && marks <= 89) {
    grade = "B";
} else if (marks >= 70 && marks <= 79) {
    grade = "C";
} else if (marks >= 60 && marks <= 69) {
    grade = "D";
} else if (marks >= 0 && marks < 60) {
    grade = "F";
} else {
    grade = "Invalid Marks";
}

// Display result
console.log("Marks:", marks);
console.log("Grade:", grade);