// Question 1: Callback-Based Calculator and Bill

function calculate(num1, num2, callback) {
  callback(num1, num2);
}

calculate(10, 20, function (a, b) {
  console.log("Sum:", a + b);
});


// Callback-Based Bill Calculator

function calculateBill(price1, price2, price3, callback) {
  callback(price1, price2, price3);
}

calculateBill(200, 300, 500, function (a, b, c) {
  console.log("Total Bill:", a + b + c);
});


// Withdraw Money Using Callback

let balance = 10000;

function withdrawMoney(amount, callback) {
  setTimeout(function () {
    balance = balance - amount;
    callback(balance);
  }, 2000);
}

withdrawMoney(2000, function (remainingBalance) {
  console.log("Remaining Balance:", remainingBalance);
});