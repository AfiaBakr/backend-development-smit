const hours =new Date().getHours();
let greeting;

if(hours < 18){
    greeting = "Good morning!";
} else {
    greeting = "Good day!";
}

document.getElementById("demo").innerHTML = greeting;
let time = new Date().getHours();
let greeting1 = "";

if (time < 10) {
  greeting1 = "Good morning";
} else if (time < 20) {
  greeting1 = "Good day";
} else {
  greeting1 = "Good evening";
}

document.getElementById("demo1").innerHTML = greeting1;

let num =34;
if(num % 2 == 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}


let score = 83;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

let age = 25;
let status = (age < 18) ? "Minor" : "Adult";
console.log(status);

let num2 = 15;
let result = (num2 % 2 === 0) ? "Even" : "Odd";
console.log(result);

let day
const date  = new Date().getDay();
switch (date) {
    case 0: 
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log(day);

let grade;
let result = 83;
switch (true) {
    case (result >= 85):
        grade = "B";
        break;
    case (result >= 90):
        grade = "A";
        break;
    case (result >= 75):
        grade = "C";
        break;
    case (result >= 60):
        grade = "D";
        break;
    case (result >= 50):
        grade = "F";
        break;
}
console.log(grade);