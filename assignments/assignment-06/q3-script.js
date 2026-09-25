const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const vegetables = ["Carrot", "Potato", "Tomato"];

// to combine the two arrays into a new array
let combined = fruits.concat(vegetables);
console.log(combined);

// to create a new array containing a selected portion of the original array
let selected = fruits.slice(1, 4);
console.log(selected);

// to remove at least one element
fruits.splice(2, 1);
console.log(fruits);

// again to add at least one element at a specific position
fruits.splice(2, 0, "Watermelon");
console.log(fruits);

// operator to delete one array element using its index
delete fruits[1];
console.log(fruits);

// After `delete`, display the array and its length. Observe what happens to the deleted position
console.log(fruits.length);