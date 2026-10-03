// Create an empty Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("bananas"))

// Create a Map
const fruits1 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log("Qauntity of Apple is ",fruits.get("apples"))
let abc=fruits1.set("apples", 300);
console.log("Qauntity of Apple is ",abc)
console.log(typeof(fruits1))

console.log(fruits1.size)
console.log(fruits1.keys())
console.log(fruits1.values())

// array.filter()
const age = [45, 4, 9, 16, 25];


function checkAdult(age) {
  return age >= 18;
}
console.log(age.filter(checkAdult))

