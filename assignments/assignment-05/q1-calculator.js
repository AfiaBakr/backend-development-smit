let num1 = "";
let num2 = "";
let operator = "";
let isSecondNumber = false;

let display = document.getElementById("display");


function addToDisplay(value) {

    if (value === "+" || value === "-" || value === "*" || value === "/") {
        operator = value;
        isSecondNumber = true;
    } 
    else {
        if (isSecondNumber === false) {
            num1 = num1 + value;
        } 
        else {
            num2 = num2 + value;
        }
    }

    display.value = num1 + operator + num2;
}


function calculate() {

    num1 = Number(num1);
    num2 = Number(num2);

    let result = "";

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        if (num2 === 0) {
            result = "Error";
        }
        else {
            result = num1 / num2;
        }
    }

    display.value = result;

    num1 = "";
    num2 = "";
    operator = "";
    isSecondNumber = false;
}


function clearDisplay() {

    num1 = "";
    num2 = "";
    operator = "";
    isSecondNumber = false;

    display.value = "";
}