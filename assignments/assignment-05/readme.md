# HTML, CSS & JavaScript — Assignment 05

## Simple Calculator, Functions & Loops | Beginner Level

### Topics Covered

Building UI with HTML & CSS, Handling Button Clicks in JavaScript, Functions (With and Without Parameters), Loops (for, while, do...while), break and continue Statements

## Important Instructions

- Read all questions carefully before starting.
- Create a separate folder for each question (e.g. `Q1-Calculator`, `Q2-Functions`, `Q3-Loops`).
- Write clean, well-structured, and properly indented code.
- Use only the HTML, CSS, and JavaScript concepts taught in class.
- Do not use any JavaScript frameworks or libraries.
- Test your code in the browser and check the Console where required.
- Students should be able to explain the logic used in their code.

## Submission Instructions

- Submit the assignment by providing a link to your GitHub repository.
- Keep a separate folder or file for each question.
- Push all your final files to GitHub before submitting the repository link.
- Make sure the repository is accessible to the instructor.

---

# Question 1 — Simple Calculator (HTML + CSS + JS)

Design and create a simple on-screen calculator using HTML, CSS, and JavaScript. The calculator only needs to support four operations: Addition, Subtraction, Multiplication, and Division. It does not need to look like a real calculator with all digit buttons — a simple form-style layout is enough.

### Tasks:

- Create an HTML page with two input fields where the user can type two numbers.
- Add four buttons: Add, Subtract, Multiply, and Divide.
- Use basic CSS to center the calculator on the page and give the inputs/buttons a neat, readable look (spacing, colors, borders).
- Write one JavaScript function for each operation (four functions total) that reads the two numbers and performs the calculation.
- Display the result on the page itself (for example inside a `<p>` or `<div>`) — do not only use `console.log()`.
- For Divide, if the second number is 0, show the message `"Cannot divide by zero"` instead of a result.
- Keep it simple: No need for decimals, keyboard support, or a calculator-style button grid — just two inputs, four buttons, and a result area.

---

# Question 2 — Functions With and Without Parameters

Create a JavaScript file that demonstrates the difference between a function that takes no parameters and a function that takes parameters.

### Tasks:

- Write a function with no parameters called `greet()` that simply displays a fixed message, for example `"Welcome to JavaScript!"`, using `console.log()`.
- Write a function with one parameter called `greetUser(name)` that displays a personalized message, for example `"Welcome, Ali!"`, using the value passed in.
- Write a function with two parameters called `addNumbers(num1, num2)` that returns the sum of the two numbers (use the `return` keyword).
- Call all three functions and display their outputs using `console.log()`. For `addNumbers`, store the returned value in a variable first, then log it.

### Goal:

Understand that a function without parameters always behaves the same way, while a function with parameters can produce different results depending on the values you pass to it.

---

# Question 3 — Number Pattern Using Loops

Create a JavaScript file that asks the user to enter a number `n`, and then prints the number pattern shown below using loops. The pattern should have exactly `n` rows.

For example, if the user enters `n = 7`, the output should look like this:

| Row | Output |
|---|---|
| 1 | 1 |
| 2 | 12 |
| 3 | 123 |
| 4 | 1234 |
| 5 | 12345 |
| 6 | 123456 |
| 7 | 1234567 |

### Tasks:

- Take a number from the user using `prompt("Enter a number:")` and store it in a variable `n` (remember to convert it to a number using `parseInt()`).
- Using loops, print the pattern shown above so that it produces exactly `n` rows.
- Print each row on its own line using `console.log()`.
- Test your program with a few different values of `n`, for example `n = 5` and `n = 7`.

### Tip:

Look carefully at the table — row number 3 contains `123`, row number 5 contains `12345`. Figure out the relationship between the row number and what gets printed on that row, then think about which loop(s) can build that.

---

# Question 4 — Scenario: Roll Call Using break and continue

### Scenario:

A teacher is calling out roll numbers 1 to 20 one by one to take attendance. Roll number 13 belongs to a student who was already marked present earlier, so the teacher should skip calling that number and move on to the next one.

When the teacher reaches roll number 18, the recess bell rings and the teacher must stop calling out roll numbers immediately — no roll numbers from 18 onward should be called.

### Tasks:

- Use a loop that goes through roll numbers 1 to 20.
- When the roll number is 13, use `continue` so it is not printed, and the loop moves on to the next roll number.
- When the loop reaches roll number 18, use `break` to stop the loop completely, so 18 and every number after it are never printed.
- For every other roll number, print a message such as `"Calling roll number 1"` using `console.log()`.
- After the loop ends, print the total number of roll numbers called out.

### Expected Result:

Roll numbers 1 to 12 and 14 to 17 are printed (13 is skipped using `continue`); the loop stops as soon as it reaches 18, so 18, 19, and 20 are never printed.

**Total roll numbers called = 16.**

---

# Final Submission Checklist

- [ ] Separate folder/file created for each question.
- [ ] Calculator supports Add, Subtract, Multiply, and Divide only.
- [ ] Calculator shows the result on the page and handles divide-by-zero.
- [ ] Function with no parameters created and called.
- [ ] Function with parameters created and called, including one that returns a value.
- [ ] Number pattern printed correctly for the given input `n`.
- [ ] Roll call scenario uses `continue` to skip roll number 13.
- [ ] Roll call scenario uses `break` to stop at roll number 18.
- [ ] Total roll numbers called printed after the loop.
- [ ] Code tested in the browser.
- [ ] All files pushed to GitHub.
- [ ] GitHub repository link is ready to submit.

---

**Happy Coding!**

https://www.geeksforgeeks.org/quizzes/css-quiz-set-1/
https://www.geeksforgeeks.org/quizzes/css-quiz-set-2/