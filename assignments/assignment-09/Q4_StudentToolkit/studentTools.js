// Function to return the student's full name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Function to calculate total marks
function calculateTotal(mark1, mark2, mark3, mark4) {
    return mark1 + mark2 + mark3 + mark4;
}

// Named export
export { getFullName };

// Default export
export default calculateTotal;