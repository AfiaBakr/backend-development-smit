# JavaScript Basics — Assignment 07

## Array Search, Sorting & JavaScript Objects | Scenario-Based

### Topics

Array Search, Sorting, Arrow Functions, `Array.isArray()`, `delete`, `concat()`, `slice()`, `splice()`, `length`, Objects, Properties, Object Methods, `this`

## Important Instructions

* Read each scenario carefully and decide which JavaScript concept or method is appropriate.
* The questions will not tell you which specific array method to use. Analyze the requirement and choose the method yourself.
* Create a separate JavaScript file for each question. You may create an HTML file for each question to run the code.
* Use only concepts taught in class. Do not use frameworks or libraries.
* Use meaningful variable names and properly indented code.
* Use `console.log()` to display results unless another output is required.
* Test your code in the browser before submission.

## Submission Instructions

* Submit a link to your GitHub repository.
* Keep a separate file for each question.
* Push all final files to GitHub before submitting.
* Make sure the repository is accessible to the instructor.

---

## Question 1 — Student Search System

You are creating a student management system. Your class contains:

```javascript
['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza', 'Sara', 'Bilal']
```

* Check whether Ayesha is present in the class.
* Find the position of the first occurrence of Sara.
* Find the position of the last occurrence of Sara.
* Find the first student whose name starts with the letter A.
* Find the position of the first student satisfying that condition.
* Find the last student satisfying a chosen condition and determine that student's position.
* Display all results using `console.log()`.

---

## Question 2 — Product Price Organizer

You are working on an online store. Product prices are:

```javascript
[1200, 450, 3000, 750, 1500, 250]
```

* Display the prices from lowest to highest.
* Display the prices from highest to lowest.
* Show the original list and a reversed version.
* Generate a random ordering of the prices for a promotional display.
* Make sure numeric values are compared as numbers rather than text.
* Display each result using `console.log()`.

---

## Question 3 — Class Result Analysis

A teacher has the marks:

```javascript
[78, 45, 92, 66, 88, 54, 91, 73]
```

* Create a second array of marks and combine both groups.
* Create a smaller list containing a selected portion of the combined marks.
* Change or remove one mark in the middle of the list.
* Display the total number of marks currently stored.
* Arrange the marks so the lowest and highest results can be easily viewed.
* Reverse the order of the resulting list for another report.
* Create an arrow function that receives the marks array and displays the final result.

---

## Question 4 — Employee Record Object

Create an employee record for a company using a JavaScript object.

* Include employee ID, first name, last name, department, designation, and salary.
* Display the first name and department using dot notation.
* Display the designation and salary using bracket notation.
* Add one new property after the object is created.
* Change the value of one existing property.
* Remove one property that is no longer required.
* Display the final employee object using `console.log()`.

---

## Question 5 — Employee Object Methods

Extend the employee object from Question 4 by giving the employee actions it can perform.

* Create a method that returns the employee's complete name.
* Create another method that returns a sentence containing the employee's ID and department.
* Inside the methods, use `this` to refer to the current object's properties.
* Call both methods and display their returned values.
* Create a second employee object with similar properties and methods.
