# JavaScript Basics - Assignment 10
Asynchronous JavaScript | Scenario-Based Practice

## Topics Covered: 
Synchronous vs Asynchronous JavaScript, Callbacks, Callback Hell, Promises, resolve/reject, then/catch, Promise Chaining, async/await, Error Handling

## Important Instructions
- Read each scenario carefully and plan your solution before writing code.
- Create a separate folder or clearly separated set of files for each question. Questions involving modules will require more than one file.
- Use clean, properly indented code and meaningful variable and file names.
- Use only JavaScript concepts taught in class. Do not use frameworks or external libraries.
- Display results using `console.log()` unless a question asks for a webpage display.
- For module-based questions, load the main JavaScript file with type="module" and run the webpage through a local development server such as VS Code Live Server.
- Test your code before submission. Be prepared to explain how your solution works.

## Submission Instructions
- Submit through a link to your GitHub repository.        
- Keep a separate file for each question, including all required HTML and JavaScript files.       
- Push all final files to GitHub before submitting the link.      
- Make sure the repository is accessible to the instructor.            

### Question 1 – Callback-Based Calculator and Bill
A shop needs reusable calculation functions. The calculation logic should be provided when the function is called.
- Create a function named `calculate()` that accepts two numbers and a callback. Pass a callback that adds the numbers and displays the result.
- Create a function named `calculateBill()` that accepts three product prices and a callback. Use prices 200, 300, and 500; the expected total is 1000.
- Create withdrawMoney(amount, callback). Assume a starting balance of 10,000. After approximately two seconds, call the callback to display the remaining balance.
- Make sure the callback runs after the delayed operation finishes.

### Question 2 – Order Processing Sequence
An online food service must prepare an order, pack it, and then notify the customer. Each step takes approximately one second.
- Display a message when each step starts and when it finishes.
- Make sure packing starts only after preparation finishes, and notification happens only after packing finishes.
- First implement the workflow using nested callbacks to demonstrate how deeply nested asynchronous code can become.
- Write a second version of the workflow using a cleaner Promise-based approach or async/await.
- Add a short comment comparing the readability of the two versions.

### Question 3 – Event Registration Promise
A training institute has an online registration service. Registration succeeds when a seat is available and fails when the class is full.
- Create a function named registerStudent() that returns a Promise and accepts a student name and whether a seat is available.
- If a seat is available, fulfill the Promise with a registration confirmation message.
- If no seat is available, reject the Promise with a useful error message.
- Handle the result and error using Promise chaining.
- Test both cases: one registration with a seat available and one with no seat available. Display  he messages using `console.log()`.

### Question 4 – Load Student Records in Sequence
A school portal loads details for three students. Each student's data takes about two seconds to load, and each student should be shown before the next student's request begins.
- Create `getStudentData(id)` that returns a Promise and resolves with sample student details after a two-second delay.
- Use student IDs 1, 2, and 3.
- Display a loading message and then display each student's data when it is ready.
- Load Student 1, then Student 2, then Student 3, in that order, using async/await.
- Add error handling so a rejected request does not cause an unhandled error.
- Add a comment explaining why await pauses the current async function but does not freeze the whole JavaScript program.

### Question 6 –Mini Project: Support Ticket Status Checker
A help-desk website lets users check the status of a support ticket. Create a small ticket checker with asynchronous behavior.
- Create sample ticket data containing a ticket ID, customer name, and status (for example, Open, In Progress, or Resolved).
- Create a function that simulates retrieving a ticket and returns a Promise that settles after approximately two seconds.
- Use async/await to retrieve and display the selected ticket.
- If the ticket ID does not exist, reject the operation and display a helpful message.
- Display a loading message during retrieval and handle errors gracefully.
- You may create an HTML input and button for the ticket ID, or use a predefined ticket ID in JavaScript.

## Suggested Project Structure

```
Assignment-10/
Q1_Callbacks.html / Q1_Callbacks.js
Q2_OrderProcessing.html / Q2_OrderProcessing.js
Q3_Promises.html / Q3_Promises.js
Q4_AsyncAwait.html / Q4_AsyncAwait.js
Q6_TicketChecker.html / Q6_TicketChecker.js
```

## Final Submission Checklist

■ Each question is saved separately.    
■ Array and object destructuring tasks are completed.    
■ Missing data and renamed properties are handled where required.     
■ Arrays and objects are copied or combined without changing the originals where required.    
■ Named and default exports/imports are demonstrated.           
■ Module files use correct file paths and load through a local development server.    
■ All files are pushed to GitHub.             
■ GitHub repository link is ready to submit.             

### Analyze the data, choose the right ES6+ feature, and keep your code reusable. Happy Coding!
