// Question 2 - Student Profile from an API

const student = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Object destructuring with property renaming
const {
    name,
    age,
    department: program,
    address: { city, country },
    phone = "Not provided"
} = student;

// Extract the student's name and age into variables.
console.log(`Name: ${name}, Age:${age}`)
// Extract the city and country from the address information.
console.log(`City: ${city}, Country: ${country}`);
// Display a short profile summary containing the student's name, program, city, and phone value.
console.log(`Name: ${name}, Program: ${program}, City: ${city}, Phone: ${phone}`);