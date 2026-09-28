// Question 5 — Employee Object Methods

// Create the first employee object
const employee1 = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",
    designation: "Web Developer",
    salary: 85000,

    // Method to return the employee's complete name
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    // Method to return employee ID and department
    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};


// Call both methods
console.log("Complete Name:", employee1.getFullName());
console.log("Employee Information:", employee1.getEmployeeInfo());


// Create a second employee object
const employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Khan",
    department: "Marketing",
    designation: "Marketing Executive",
    salary: 70000,

    // Method to return the employee's complete name
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    // Method to return employee ID and department
    getEmployeeInfo: function () {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};


// Call both methods for the second employee
console.log("Complete Name:", employee2.getFullName());
console.log("Employee Information:", employee2.getEmployeeInfo());