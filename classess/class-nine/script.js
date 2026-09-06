let x = 5;
let y = 10;
let z = x + y;
// let a = 5;
// let b = 10;
// let c = a * b;
// let d = a % b;
let w =15 +5 /2 -3* 7;
document.getElementById("demo2").innerHTML = "The value of x is: " + x;
document.getElementById("demo3").innerHTML = "The value of y is: " + y;
// document.getElementById("demo4").innerHTML = "The value of c is a * b: " + c;
// document.getElementById("demo5").innerHTML = "The value of d is a % b: " + d;
document.getElementById("demo").innerHTML = "The value of z is: " + z;
document.getElementById("demo6").innerHTML = "The value of w is (15 +5 /2 -3* 7): " + w;

let num1 = 10;
num1 += 5; // num1 = num1 + 
console.log(num1); // Output: 15
num1 -= 3; // num1 = num1 - 3
console.log(num1); // Output: 12
num1 *= 2; // num1 = num1 * 2
console.log(num1);
num1 /= 4; // num1 = num1 / 4
console.log(num1); // Output: 3
num1 %= 2; // num1 = num1 % 2
console.log(num1); // Output: 1

let a = 5;

a++;

a += 4;

a *= 2;

console.log(a);

let f = true;
f &&= 12;
console.log(f);

e = false;
e ||= 24;
console.log(e);
let hours = 14;
if(hours < 18) {
    document.getElementById("greeting").innerHTML = "Good day";
  }

  let city = "Karachi";
  let age = 18;
  if(city === "Karachi" && age >= 18) {
    console.log("You are eligible to vote in Karachi.");
  }