// Import course data and formatting function
import courses from "./courses.js";
import formatCourse from "./courseUtils.js";

// Extract course name and fee
const { courseName, fee } = courses[0];

console.log("Course Name:", courseName);
console.log("Course Fee:", fee);

// Add a new course without changing the original list
const updatedCourses = [
    ...courses,
    {
        courseName: "UI/UX Design",
        instructor: "Ayesha Malik",
        duration: "3 months",
        fee: 14000
    }
];

// Update the fee of an existing course
const updatedCourse = {
    ...courses[0],
    fee: 17000
};

// Display original and updated course data
console.log("Original Courses:", courses);
console.log("Updated Course List:", updatedCourses);
console.log("Course with Revised Fee:", updatedCourse);

// Display summaries of all courses