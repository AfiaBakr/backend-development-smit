/* ==========================================
   Question 2 - DOM Manipulation with JavaScript
   Concepts: getElementById(), document.write(),
             alert(), console.log()
   ========================================== */

// Use document.write() to display a simple message on the page
document.write("<p>This message was added using document.write().</p>");

// Use getElementById() to access the heading and the paragraph
var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");

// Access the button using its id
var showButton = document.getElementById("showBtn");

// When the button is clicked, show the heading text using alert()
showButton.onclick = function () {
    alert(titleElement.textContent);
};

// Display the paragraph text using console.log()
console.log(messageElement.textContent);
