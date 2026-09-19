//Continue and Break Statement
let number = "";

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    number += "The Number is =" +i + "<br>";
}

document.getElementById("output").innerHTML = number;

let number1 = "";
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    number1 += "The Number is =" +i + "<br>";
}

document.getElementById("cars").innerHTML = number1;

//Functions

function sayHello() {
    return "Hello World";
}

let greeting = sayHello();
document.getElementById("greeting").innerHTML = greeting;

function addNumbers(num1, num2) {
    return num1 + num2;
}

let sum = addNumbers(5, 10);
document.getElementById("add").innerHTML = "The sum is: " + sum;

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

let product = multiplyNumbers(5, 10);
document.getElementById("multiply").innerHTML = "The product is: " + product;

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}

let quotient = divideNumbers(10, 2);
document.getElementById("divide").innerHTML = "The quotient is: " + quotient;

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

let difference = subtractNumbers(10, 5);
document.getElementById("subtract").innerHTML = "The difference is: " + difference;

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name = fullName("Afia", "Bakr");
document.getElementById("fullName").innerHTML = "Full Name: " + name;


// reverse number
//let number2 =prompt("Enter a number: ");
// let reversed = number2.split("").reverse().join("");


// document.getElementById("reverse").innerHTML = "Reversed Number: " + reversed;

//guess the number
let secretNumber = 6;

let userGuess = prompt("Guess a number between 1 and 10: ");

if (Number(userGuess) === secretNumber) {
    document.write("Congratulations! You guessed the correct number: " + secretNumber);
} else {
    document.write("Sorry, the correct number was: " + secretNumber);
}
