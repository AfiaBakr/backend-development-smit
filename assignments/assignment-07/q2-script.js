// Question 2 — Product Price Organizer

// Product prices
const prices = [1200, 450, 3000, 750, 1500, 250];
// [...prices] creates a copy of the prices array without changing the original array.
const orignalPrice =[...prices]

// 1. Display the prices from lowest to highest
const lowestToHighest = prices.sort((a, b) => a - b);

console.log("Prices from lowest to highest:", lowestToHighest);


// 2. Display the prices from highest to lowest
const highestToLowest = prices.sort((a, b) => b - a);

console.log("Prices from highest to lowest:", highestToLowest);


// 3. Show the original list and a reversed version
console.log("Original prices:", orignalPrice);

const reversedPrices = orignalPrice.reverse();
console.log("Reversed prices:", reversedPrices);


// 4. Generate a random ordering of the prices
const randomPrices = prices.sort(() => Math.random() - 0.5);

console.log("Random ordering of prices:", randomPrices);


// 5. Numeric values are compared as numbers
// The (a, b) => a - b function ensures numerical sorting.