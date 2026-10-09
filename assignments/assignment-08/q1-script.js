// Online Store Sales Report 

// Original order amounts 
const orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];
console.log("Original Orders:", orders); 

// 1. Find the first order amount greater than 2000  
const firstOrderGreaterThan2000 = orders.find(order => order > 2000); 
console.log("First Order Greater Than 2000:", firstOrderGreaterThan2000); 

// 2. Create a list of all orders greater than 1000 
const ordersGreaterThan1000 = orders.filter(order => order > 1000); 
console.log("Orders Greater Than 1000:", ordersGreaterThan1000); 

// 3. Calculate the combined total of all orders 
const totalOrders = orders.reduce((total, order) => total + order, 0); 
console.log("Combined Total of All Orders:", totalOrders);

