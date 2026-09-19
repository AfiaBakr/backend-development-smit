let number = "";

for (let i = 1; i <= 10; i++) {
    number += "The Number is =" +i + "<br>";
}

document.getElementById("output").innerHTML = number;


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++) {
    text += "This is a " +cars[i] + " "+"Car"+"<br>";
}
document.getElementById("cars").innerHTML = text;
//even numbers
let base = 0;
for (let i = 0; i <=40; i += 2) {
    document.write(i + "<br>");
}

//odd numbers
let odd = 0;
for (let i = 1; i <= 31; i += 2) {
    document.write(i + "<br>");
}
// number table
//let number1 = Number(prompt("Enter a number:"));


for (let i = 1; i <= 10; i++) {
    document.write(number1 + " × " + i + " = " + (number1 * i) + "<br>");
}

//while loop
let i = 0;
while (i < 10) {
    document.write(i + "<br>");
    i++;
}
// Table of 5

let table = 1;

while (table <= 10) {
    document.write("5 × " + table + " = " + (5 * table) + "<br>");
    table++;
}

