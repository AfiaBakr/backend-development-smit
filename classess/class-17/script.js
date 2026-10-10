// Destructuring with Array
const colors = ["Red", "Blue", "Green", "Orange"];
let [first, sec, ,forth]= colors


console.log(first)
console.log(sec)
console.log(forth)

const name1 =["Ali", 21]
let [one, two, three= "Karachi"]= name1
console.log(one)
console.log(two)
console.log(three)

// const name2 =[10,20]
// let [a,b] =name2
// [a,b]=[b,a]
// console.log(a)
// console.log(b)

// Destructuring with Object
const student1 ={
  name: "Ali",
  age: 21,
  city: "Karachi"
}

let {name, age, city}= student1
console.log(name)
console.log(age)
console.log(city)

// renaming variable
const student2 ={
  name3: "Ali",
  age1: 21,
  city1: "Karachi"  
}
// let{name: studentname, age:studentage, city:studentcity = "Lahore"} =student2
let{name3, age1, city1= "Lahore"} =student2
console.log(name3)
console.log(age1)
console.log(city1)    // ager city variabel bna nhi ho ga to hi ye Lahore print kry ga werna Karachi hi print kry ga

// q1 
let arr =[5,10,15];
let [a,b]= arr
console.log(b)   // ans 10

//q2
let [a1=100]=[50];
console.log(a1)
//q3
let user ={name5: "ali", age5:24};
let{age5}=user;
console.log(age5)
 

// JavaScript Spread Operator (...) — Lecture Notes

// 1. What is the Spread Operator?

// The spread operator (...) in JavaScript is used to expand the

//  elements of an array or the properties of an object.

// Easy words mein: spread operator kisi array ya object ke

// elements/properties ko spread ya unpack kar deta hai.

// Syntax:

// ...array

// ...object

// Spread operator ko mostly in situations mein use karte hain:

// Copying an array

// Merging arrays

// Adding new elements to an array

// Copying objects

// Merging objects

// Passing array values to a function

// 2. Spread Operator with Arrays

// Example 1: Copying an array

// Without spread operator, agar hum array ko directly doosre variable mein assign karein,

// to dono variables same array ko reference karte hain.

let array1=[10,20,30,50,60]
let array2 = array1
console.log(array1)
console.log(array2)

let array3 =[...array1]
array3.push(40)
console.log(array1)
console.log(array3)

let boy =["Ali", "Ahmed"]
let girl=["Alia", "Ayesha"]
let student=[...boy, ...girl]
console.log(student)

let num=[20,30,40]
let number=[10, ...num, 50]
console.log(number)
// 
// Q1. Shopping Cart — Copy an Array
// A shopping website has a cart containing three products. You want to create a separate cart for a customer and add one more product without changing the original cart.

// Create a copy using the spread operator.
// Add "Headphones" to the new cart.
// Print both arrays.

let cart = ["chips", "Juice", "Burgger"];

let newCart = [...cart];
newCart.push("Colddrink");

console.log("Original Cart:", cart);
console.log("New Cart:", newCart);


// Q2. Food Delivery App — Add Items at Both Ends
// A food delivery app has a list of ordered items. Add "Water" at the beginning and "Dessert" at the end without directly modifying the original array.


let foodItems = ["Burger", "Pizza", "Fries"];

let newFoodItems = ["Water", ...foodItems, "Dessert"];

console.log("Original Array:", foodItems);
console.log("New Array:", newFoodItems);
