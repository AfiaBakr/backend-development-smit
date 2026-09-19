// Function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}


// Function with one parameter
function greetUser(name) {
    console.log("Welcome, " + name + "!");
}


// Function with two parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}


// Calling the function without parameters
greet();


// Calling the function with one parameter
greetUser("Ali");


// Calling the function with two parameters
let sum = addNumbers(10, 20);

console.log("Sum:", sum);