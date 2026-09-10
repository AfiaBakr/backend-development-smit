document.getElementById("output4").innerHTML = "Question 4: Ternary Operator";


let age = parseInt(prompt("Enter your age:"));
document.write("You entered age: " + age + "<br>");

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible to Vote";

console.log(result);