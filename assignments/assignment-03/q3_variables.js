/* ==================================================
   Question 3 - JavaScript Variables & Data Types
   Concepts: var, let, const, data types, typeof
   ================================================== */

/* ---------- Declaring variables with var, let, const ---------- */

var courseName = "Backend Development";   // var  -> old way to declare a variable, can be re-assigned
let studentAge = 20;                      // let  -> modern variable, value can change later
const country = "Pakistan";              // const -> constant value that cannot be re-assigned

console.log("var courseName:", courseName);
console.log("let studentAge:", studentAge);
console.log("const country:", country);


/* ---------- JavaScript Data Types ---------- */

// String -> text data written inside quotes. Example: "Hello"
let myString = "Hello World";
console.log("Value:", myString, "| Type:", typeof myString);

// Number -> any integer or decimal number. Example: 100 or 3.14
let myNumber = 3.14;
console.log("Value:", myNumber, "| Type:", typeof myNumber);

// Boolean -> logical value, either true or false. Example: true
let myBoolean = true;
console.log("Value:", myBoolean, "| Type:", typeof myBoolean);

// Undefined -> a variable that is declared but has no value assigned yet
let myUndefined;
console.log("Value:", myUndefined, "| Type:", typeof myUndefined);

// Null -> an intentional "empty" or "no value". Example: let x = null
let myNull = null;
console.log("Value:", myNull, "| Type:", typeof myNull); // typeof null returns "object" in JavaScript

// Object -> a collection of data stored as key/value pairs
let myObject = { name: "Afia", age: 20 };
console.log("Value:", myObject, "| Type:", typeof myObject);

// Array -> an ordered list of values stored in one variable
let myArray = ["HTML", "CSS", "JavaScript"];
console.log("Value:", myArray, "| Type:", typeof myArray); // typeof array returns "object"

// Symbol -> a unique and unchangeable value, often used as an identifier
let mySymbol = Symbol("id");
console.log("Value:", mySymbol.toString(), "| Type:", typeof mySymbol);

// BigInt -> used to store very large integers that Number cannot hold. Example: 12345678901234567890n
let myBigInt = 1234567890123456789012345n;
console.log("Value:", myBigInt, "| Type:", typeof myBigInt);
