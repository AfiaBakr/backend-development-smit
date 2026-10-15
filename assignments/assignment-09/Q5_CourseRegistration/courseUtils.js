// Reusable function to format course summary

function formatCourse(course) {
    return `Course: ${course.courseName}, 
    Instructor: ${course.instructor}, 
    Fee: Rs. ${course.fee}`;
}

export default formatCourse;