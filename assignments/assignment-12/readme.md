# Node.js Fundamentals - Assignment 12

**Node Runtime, npm, Core Modules, HTTP, Events, Streams & Configuration**

**Topics Covered:** Node.js runtime, npm, package.json, CommonJS modules, os, path, fs, HTTP server and routes, EventEmitter, Streams, process.env, dotenv

## Important Instructions

- Make sure Node.js and npm are installed. Check them in the VS Code terminal using `node -v` and `npm -v`.
- Create a separate file or folder for each question. Keep related files for the same question together.
- Use CommonJS module syntax (`require` and `module.exports`) as taught in the lecture.
- Use only Node.js built-in modules and packages specifically requested. Do not use Express, MongoDB, or a database.
- Write clean, properly indented code and meaningful file/function names.
- Run files using `node filename.js`. For server questions, keep the terminal running and stop the server with `Ctrl + C`.
- For dotenv questions, do not upload the real `.env` file to GitHub. Add it to `.gitignore` and provide an `.env.example` with placeholder values.

## Submission Instructions

- Submit through a link to your GitHub repository.
- Create a separate file/folder for each question and include all files required to run it.
- Push your latest working code to GitHub before submitting the repository link.
- Make sure the repository is accessible to the instructor. Do not commit `node_modules` or real environment secrets.

---

## Question 1 - Student Utility CLI (Node.js, npm & Modules)

A training institute wants a small command-line utility to display student information and calculate marks. Build this as a Node.js project with reusable code separated into files.

- Create a project folder named `student-utility` and initialize it as an npm project.
- Create `student.js` with a function that receives a student's name and course and returns a formatted introduction.
- In the same file, create a function that receives obtained marks and total marks and returns the percentage.
- Export both functions from `student.js` using CommonJS.
- Create `app.js`, import the functions from `student.js`, and call them with sample data.
- Display the student's name, course, percentage, and current Node.js version using `process.version`.
- Add a start script in `package.json` so the application runs using `npm start`.

**Expected test data:** Ali; Web Development; obtained marks 425; total marks 500; expected percentage 85%.

---

## Question 2 - Computer Information & Student Notes Manager

You are creating a utility for a computer lab. It should display computer information and manage a notes file for a student.

- Display the operating system platform, CPU architecture, total memory, free memory, and home directory.
- Create a folder named `data` if it does not already exist.
- Build the path for `student-notes.txt` using a path utility rather than manually joining folder names with slash characters.
- Display the file name and extension from the path.
- Create the notes file and write at least three lines about what you learned in Node.js.
- Read the file and display its contents in the terminal.
- Append one more line and display the updated contents.
- Rename the file to `class-notes.txt`.
- Create a temporary file and remove it only after completing the other file operations.

**Note:** Use the Node.js `os`, `path`, and `fs` core modules. Run file operations in the correct order so the file is not renamed or removed before it is read.

---

## Question 3 - Campus Information HTTP Server

A college wants a simple information server that can respond to browser requests. Build it using Node.js without any web framework.

- Create a server using the built-in HTTP module and run it on port 3000.
- When a visitor opens `/`, return a welcome message for the college.
- When the visitor opens `/about`, return a short description of the college.
- When the visitor opens `/courses`, return a list of at least three available courses.
- When the visitor opens `/students`, return sample student data.
- For every unknown URL, return status code 404 and the message `Page Not Found`.
- Set the appropriate response Content-Type and status code for each route.
- Display a message in the terminal when the server starts and test every route in the browser.

**Test URLs:**

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/courses
- http://localhost:3000/students
- http://localhost:3000/unknown

---

## Question 4 - Student Registration Events & File Streams

A student registration application needs to notify the system when a new student is registered. It also needs to read and copy a large activity log without loading the entire file at once.

### Part A - Events

- Create an `EventEmitter` object for the registration system.
- Register a listener for an event named `studentRegistered`.
- Create a function that accepts a student ID and name, then emits the event with that student's details.
- When the event occurs, display a registration confirmation message in the terminal.
- After the confirmation, schedule a reminder message to appear after approximately three seconds.
- Call the registration function for at least two sample students.

### Part B - Streams

- Create `large.txt` containing several lines of sample activity log data.
- Read the file using a readable stream and display each received chunk in the terminal.
- Display a completion message when reading ends.
- Copy the file into `copy.txt` using a readable stream, writable stream, and pipe.
- Display a success message when copying finishes and handle read/write errors.

---

## Final Submission Checklist

- [ ] Node.js and npm setup verified.
- [ ] npm project and package.json script created.
- [ ] CommonJS modules exported and imported successfully.
- [ ] os, path, and fs tasks completed.
- [ ] HTTP server routes and 404 response tested.
- [ ] EventEmitter event and listener demonstrated.
- [ ] Streams used to read and copy a file.
- [ ] Separate files/folders organized and pushed to GitHub.
- [ ] GitHub repository link is ready to submit.

---

**Run it, test it, break it, debug it - and understand how Node.js works. Happy Coding!**
