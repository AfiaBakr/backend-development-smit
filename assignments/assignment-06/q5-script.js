// Create an array containing at least 5 product names

const products =['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Headphones']

console.log(products);

// Display the number of products using length
console.log(products.length);

// Display the first and last product using at()
console.log('First Product: ',products.at(0));
console.log('Last Product: ',products.at(-1));

// Add a product using push()
console.log(products.push("webCam"));

// Add another product using unshift()
console.log(products.unshift("Mic"), products);

// Remove the last product using pop()
let removeLast =products.pop();
console.log(removeLast);
console.log(products);

// Remove the first product using shift()
let removeFirst = products.shift();
console.log(removeFirst);
console.log(products);

// Create a second product array and combine it using concat().
const products2 =['LCD', 'Screen Protector']
let combineProduct = products.concat(products2)
console.log(combineProduct);

// Use slice() to create a smaller list.
let newCopy =combineProduct.slice(2)
console.log(newCopy);

products.splice(2, 1, 'Gaming Keyboard');
console.log("After splice():", products);

// Use join() to display the final product list as a string.
console.log(combineProduct.join('-'))

// Use an arrow function to display the final array
const showProducts = () => {
    console.log("Final Array:", products);
};

showProducts();

// Use Array.isArray() to verify the final product list is an array.
console.log("Is the final product list an array?" ,Array.isArray(products));
console.log("Is the final product list an array?" ,Array.isArray(products2));
console.log("Is the final product list an array?" ,Array.isArray(combineProduct));