document.getElementById("output").innerHTML = "Question 1: JavaScript Operators";

// Two number variables
let num1 = 20;
let num2 = 5;

// =========================
// Arithmetic Operators
// =========================

console.log("Arithmetic Operators:");

console.log("Addition of " + num1 + " and " + num2 + " =", num1 + num2);
console.log("Subtraction of " + num1 + " and " + num2 + " =", num1 - num2);
console.log("Multiplication of " + num1 + " and " + num2 + " =", num1 * num2);
console.log("Division of " + num1 + " and " + num2 + " =", num1 / num2);
console.log("Modulus of " + num1 + " and " + num2 + " =", num1 % num2);
// Increment
let incrementNumber = num1;
incrementNumber++;
console.log("Increment of " + num1 + " =", incrementNumber);
// Decrement
let decrementNumber = num2;
decrementNumber--;
console.log("Decrement of " + num2 + " =", decrementNumber);

// =========================
// Assignment Operators
// =========================

console.log("Assignment Operators:");

let result = num1;

console.log("Initial value:", result);

result += num2;
console.log("After += :", result);

result -= num2;
console.log("After -= :", result);

result *= num2;
console.log("After *= :", result);

result /= num2;
console.log("After /= :", result);


// =========================
// Comparison Operators
// =========================

console.log("Comparison Operators:");

console.log("num1(20) == num2(5):", num1 == num2);
console.log("num1(20) === num2(5):", num1 === num2);
console.log("num1(20) != num2(5):", num1 != num2);
console.log("num1(20) !== num2(5):", num1 !== num2);
console.log("num1(20) > num2(5):", num1 > num2);
console.log("num1(20) < num2(5):", num1 < num2);
console.log("num1(20) >= num2(5):", num1 >= num2);
console.log("num1(20) <= num2(5):", num1 <= num2);