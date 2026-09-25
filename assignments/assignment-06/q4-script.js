// Create at least three variables: one array, one string, and one number.

const fruits =['Apple', 'Banana', 'Mango', 'Oriange', 'Gava'];
const student = 'Alina';
const number = 99;

// Use Array.isArray() to check each variable and display the results
console.log('fruit variable is Arry: ',Array.isArray(fruits));
console.log('student variable is Array: ',Array.isArray(student));
console.log('number variable is Array: ',Array.isArray(number));

// Create an arrow function named showArray that accepts an array and displays it using console.log()
const showArray =(array)=>{
    console.log('Desplay in Arrow function Name of Array: ',array)
};
showArray(fruits);

// Call the arrow function with your array
const showValue = (value) => {
    console.log("Value:", value);
};
showValue("Hello JavaScript!");

// Create another simple arrow function that accepts one value and displays that value
const showArray2 =(a,b)=>{
    console.log(a*b)
};
showArray2(3,5)