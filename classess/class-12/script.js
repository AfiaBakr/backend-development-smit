const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[4];
console.log(fruits[4])
document.write(delete fruits[3]);
console.log(fruits)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1)
// document.write(myChildren1)

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1)
console.log(fruits1.slice(1,3))
console.log(fruits1.splice(2, 0, "Lemon", "Kiwi"))

console.log(fruits1.splice(2, 2, "papaya", "grayfruit"))

console.log(fruits1.splice(0, 1,))