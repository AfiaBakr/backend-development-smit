// Array Search Methods

const fruits= ["Apple","Banana","mango","Apple"];
let position = fruits.indexOf("Apple") +1;
console.log("The position of Apple in fruits array is",position)

//includes return whether the element is present in the array or not 
//true/false
console.log (fruits.includes("peach"));
//The sort() method sorts an array alphabetically order:)
console.log (fruits.sort());

// Reverse the array:
console.log (fruits.reverse());

//logic for descending ( sort+reverse)

// First sort the array-- alphabetical order ( a-z ) -ascending
fruits.toSorted();

// Then reverse it:( ascending reversed to descending)
fruits.toReversed();

//Find the index of "JavaScript":
let languages = ["HTML", "CSS", "JavaScript", "React"];
console.log(languages.indexOf("JavaScript"));
// Find the index of 30:
let nums = [10, 20, 30, 40, 50];
console.log(nums.indexOf(30));

// Online Store Prices
let prices = [1200, 450, 999, 300, 1500, 700];
console.log(prices)
// A customer wants to see products from cheapest to most expensive.

// Sort the array in ascending order.
//a-b( asc)
console.log("Products from cheapest to most expensive ",prices.sort(function(a, b){return a - b}));
//b-a( desc)
console.log("Products from most expensive to cheapest ",prices.sort(function(a, b){return b-a}));

function myFunction2() {
  return prices.sort(function(a, b){return a - b})}
console.log (myFunction2(prices));

const points = [40, 100, 1, 5, 25, 10];
console.log(points)
console.log(points.sort(function(a, b){return a - b}));

// Student Marks
let marks = [65, 92, 48, 75, 88, 55];

// A teacher wants to:

// Sort marks from highest to lowest.
// Check whether anyone scored exactly 75.
console.log(marks.sort(function(a, b){return b-a}));

function secondScore(){
    return marks.includes(75)
};
console.log("Check anyone scored exactly 75",secondScore());

const points1 = [40, 100, 1, 5, 25, 10];
console.log(points1);  


function myFunction() {
  console.log(points1.sort(function(){return 0.5 - Math.random()}));

}

//random number guessing game , dice rolling 
// let guess= random function 

// guess= 7
// secret =random function 

// 1,2,3,4,5,6( dice )
let secretNum = Math.floor(Math.random() * 6) + 1;
console.log(Math.random())
console.log(secretNum)
console.log(secretNum)
console.log(secretNum)
console.log(secretNum)
console.log(secretNum)
let Score = 0;

for (let i = 1; i <= 6; i++) {

    // let userInput = Number(prompt("Chance " + i + ": Guess the dice number (1 to 6)"));

    if (secretNum == userInput) {
        Score++;
        console.log("Congratulations! You guessed correctly.");
        console.log("Your score is: " + Score);
        break;
    } 
    else {
        console.log("Sorry, try again.");
        console.log("Computer number is: " + secretNum);
        console.log("Your score is: " + Score);
    }
}







