// Question 4 — Employee Record Object

// Create an employee object
const employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",
    designation: "Web Developer",
    salary: 75000
};


// 1. Display first name and department using dot notation
console.log("First Name:", employee.firstName);
console.log("Department:", employee.department);


// 2. Display designation and salary using bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);


// 3. Add one new property after the object is created
employee.email = "ali@example.com";


// 4. Change the value of one existing property
employee.salary = 85000;


// 5. Remove one property that is no longer required
delete employee.email;


// 6. Display the final employee object
console.log("Final Employee Object:", employee);