document.getElementById("output2").innerHTML = "Question 3:  Login Validation Using if / else";

document.getElementById("password").innerHTML = "Username: admin, Password: 12345";

// Correct username and password
let correctUsername = "admin";
let correctPassword = "12345";

// Entered username and password
let username = prompt("Enter username:");
let password = prompt("Enter password:");

// Check login details
if (username === correctUsername && password === correctPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}