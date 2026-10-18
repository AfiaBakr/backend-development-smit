//Templete Litral `abc`
const name ="Ali"
let age =21;
// single line
console.log(`His name is ${name} and he is ${age} year old,`);

//multiline
const massage= `name: Ali,
Age: 21,
City: karach`;
console.log (massage)

//Task
const massage1=`Hello Sara,
Welcome to JavaScript!
Keep practise. `;

var name1 = "Liaba";
console.log(`Hi ${name1} it's a massage for you: ${massage1}`)

//Nullish (?)
const abs ={
  name: "ali",
  city: "Karachi"
}
console.log(abs?.name)
console.log(abs?.phone)

//Nualish coalescing (??)
const name2 =null;
console.log(name2?? "Sara");

const name3 ="Alia";
console.log(name3?? "Sara")

// Compare it with the logical ORoperator(||);
let quantity =0;
console.log(quantity || 10); //10
console.log(quantity ?? 10); //0

//why
// || use the fallback for any false value , including 0, false .and ""
// ?? use the fallback only null or undefine

// sync run line by line
let one ="First";
let two ="Second";
let three ="Third";

console.log(one)
console.log(two)
console.log(three)

//Asunc waiting with time

console.log(one)
setTimeout(()=>{console.log(two)},2000)
console.log(three)

//Callback Function
function great(name, callback){
  console.log("Hello, "+ name)
  callback()
}
 function sayWelcome(){
  console.log("Wlecome to JavaScript!")
 }
 great("Ali", sayWelcome)

//  Callback with setTimeout()
function showMassage() {
  console.log("Data loaded")
};

setTimeout(showMassage, 2000);
console.log("Loading ...")

// real scenario
function prepearOrder(callback) {
  console.log("Prepareing your order...")
  setTimeout(()=>{
    console.log("Order is ready!");
    callback();
  }, 2000);
}
function notifyCustomer() {
  console.log("Please collect your order")
}
prepearOrder(notifyCustomer)

//Create a function calculate() that accepts two numbers and a callback. Pass a function that adds the two numbers and prints the result.
//Q1
function calculate(num1, num2, callback) {
    callback(num1, num2);
}

function add(a, b) {
    console.log(a + b);
}

calculate(10, 20, add);

// Create a function calculateBill() that accepts the prices of three products and a callback. The callback should calculate and print the total bill.
// Expected output for prices 200, 300, and 500 and total=1000
// Q2
function calculatedBill(price1, price2, price3, callback) {
    callback(price1, price2, price3);
}

function totalBill(a, b, c) {
    let total = a + b + c;
    console.log("Total Bill =", total);
}

calculatedBill(200, 300, 500, totalBill);

// 4. ATM Withdrawal: Create withdrawMoney(amount, callback). After a 2-second delay, call the callback to display the remaining balance. Assume the starting balance is 10,000
// Q4
function withdraw(amount, callback) {
    let balance = 10000;
    setTimeout(()=> {
        callback(balance, amount);
    }, 2000);
}
// arguments of callback must same as callback function (balance, amount)
function showBalance(balance, amount) {
    console.log("Remaining Balance = ", balance- amount);
}

withdraw(3000, showBalance);