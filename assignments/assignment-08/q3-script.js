
const employees = [
    { name: 'Ali', department: 'IT', salary: 80000 },
    { name: 'Sara', department: 'HR', salary: 70000 },
    { name: 'Ahmed', department: 'IT', salary: 95000 },
    { name: 'Ayesha', department: 'Finance', salary: 85000 }
];
console.log("Employees:", employees);

// 1. Employees belonging to IT department
const itEmployees = employees.filter(employee => employee.department === 'IT');
console.log("IT Employees:", itEmployees);

// 2. First employee whose salary is greater than 90000
const highSalaryEmployee = employees.find(employee => employee.salary > 90000);
console.log("First Employee with Salary Greater Than 90000:", highSalaryEmployee);

// 3. Create a list of employee names
const employeeNames = employees.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

// 4. Calculate the total salary
const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
console.log("Total Salary:", totalSalary);


