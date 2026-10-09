
 // 1. Create inventory using Map
const inventory = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

console.log("Initial Inventory:", inventory);

// 2. Add a new product
inventory.set('mangoes', 150);

// 3. Update the quantity of an existing product
inventory.set('bananas', 400);

// 4. Retrieve the quantity of a specific product
console.log("Apple Quantity:", inventory.get('apples'));

// 5. Check whether a product exists
console.log("Are grapes available?", inventory.has('grapes'));

// 6. Remove one product
inventory.delete('oranges');

// 7. Display the number of product entries
console.log("Number of Products:", inventory.size);

// 8. Display all product names
console.log("Product Names:", [...inventory.keys()]);

// 9. Display all quantities
console.log("Product Quantities:", [...inventory.values()]);

// 10. Print each product and quantity using Map iteration
console.log("Current Inventory:");

inventory.forEach((product, quantity) => {
    console.log(`${product}: ${quantity}`);
});

// 11. Display the final size
console.log("Final Inventory Size:", inventory.size);

// 12. Empty the inventory
inventory.clear();

// 13. Display the final size
console.log("Final Inventory Size after using '.clear()':", inventory.size);