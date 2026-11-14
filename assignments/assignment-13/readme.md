# Node.js Express MVC – Two Project Assignment - 13

**FINAL PROJECT ASSIGNMENT  |  NODE.JS  •  EXPRESS.JS  •  MVC ARCHITECTURE**         

**Project Type:**  Individual Assignment     
**Difficulty:** Beginner to Intermediate     
**Storage:** In-memory JavaScript arrays

---

## Question 1
### 1. Employee Task Management REST API
Develop an Employee Task Management REST API using Node.js, Express.js, and MVC architecture. A company needs a backend system where tasks can be assigned to employees, updated, tracked, filtered, and deleted. Build the application independently. No solution code is provided.


### 2. Suggested Folder Structure
employee-task-management/          
├── server.js               
├── app.js                    
├── package.json               
├── .env            
├── .gitignore              
├── routes/                    
│   └── taskRoutes.js             
├── controllers/        
│   └── taskController.js               
├── models/          
│   └── taskModel.js                 
├── middleware/               
│   ├── errorHandler.js                
│   └── notFound.js           
└── data/           
    └── tasks.js             


### 3. Task Data Structure
|Field|Type|Description|
|-----|----|-----------|
|id|Number|Unique task ID|
|title|String|Task title|
|description|String|Task details|
|assignedTo|String|Employee name|
|priority|String|Low / Medium / High|
|status|String|Pending / In Progress / Completed|
|dueDate|String|Deadline in YYYY-MM-DD format|


### 4. Required API Endpoints
|Method|Endpoint|Purpose|
|------|--------|-------|
|GET|/api/tasks|Get all tasks
|GET|/api/tasks/:id|Get task by ID|
|POST|/api/tasks|Create new task|
|PUT|/api/tasks/:id|Update complete task|
|PATCH|/api/tasks/:id|Update selected fields|
|DELETE|/api/tasks/:id|Delete task|
|GET|/api/tasks/status/:status|Filter by status|
|GET|/api/tasks/priority/:priority|Filter by priority|


### 5. Functional Requirements
- Create a task and assign it to an employee.
- Display all tasks and retrieve one task by ID.
- Update an entire task with PUT, or selected fields with PATCH.
- Delete an existing task by ID.
- Filter tasks by status and by priority.
- Validate mandatory task fields and input values.
- Handle invalid requests and unexpected errors gracefully.


### 6. Technical Instructions
- Use Node.js and Express.js; follow MVC architecture strictly.
- Separate routes, controllers, models, data, and middleware. Do not put all logic in `server.js`.
- Store records in JavaScript arrays; a database is not required.
- Generate unique task IDs automatically.
- Use `express.json()` to parse JSON bodies.
- Read the server port from an environment variable.
- Return consistent JSON responses and appropriate HTTP status codes (200, 201, 400, 404, 500).
- Implement centralized error-handling middleware and a handler for unknown routes.
- Test every API with Postman or Thunder Client

### 7. Additional Challenges
**Challenge 1 — Task Summary**  
Implement GET /api/tasks/summary. Return the total number of tasks plus counts of Pending, In Progress, and Completed tasks. 

**Challenge 2 — Employee Tasks**         
Implement GET /api/tasks/employee/:name. Return all tasks assigned to the specified employee. 

**Challenge 3 — Overdue Tasks**          
Implement GET /api/tasks/overdue. Return tasks whose due date has passed and whose status is not Completed.

Routing note: Register specific routes such as /summary, /overdue, /employee/:name, /status/:status, and /priority/:priority before /:id to avoid route conflicts.

### 8. Evaluation Criteria – Question 1 Only (100 Marks)
|Criteria|Marks|
|--------|-----|
|Project Folder Structure|10|
|MVC Implementation|15|
|CRUD Operations|25|
|Search and Filtering|15|
|Validation and Error Handling|15|
|Additional Challenges|10|
|API Testing and Code Quality|10|
|TOTAL|100|

### 9. Question 1 Submission Requirements
- Submit the complete project folder or accessible GitHub repository link.
- Provide a README.md with installation, run, and API testing instructions.
- Submit Postman screenshots or an exported collection showing successful API tests.
- Ensure all required routes work and the folder structure matches the assignment.
- Do not include node_modules or real environment secrets in the submission.

### Question 1 - Student Instructions   
Develop the Employee Task Management REST API independently. Follow the specified folder structure, implement all required features, and test each endpoint before submission. No starter or solution code is included in this assignment.

------

## Question 2 - Library Management REST API
### COMPULSORY TO SUBMIT • NOT MARKED (0 MARKS)

Develop a Library Management REST API using Node.js, Express.js, and MVC architecture. The application must support adding, viewing, updating, searching, filtering, and deleting books. This is a mandatory practice project, but no marks will be awarded for Question 2.

### Suggested Folder Structure
library-management/   
├── server.js   
├── app.js       
├── package.json  
├── .env        
├── .gitignore                  
├── routes/bookRoutes.js          
├── controllers/bookController.js         
├── models/bookModel.js         
├── middleware/errorHandler.js          
├── middleware/notFound.js           
└── data/books.js           

### Book Fields
Each book must include: id (unique number), title, author, category, publishedYear, and available (boolean).

### Required Endpoints
|Method|Endpoint|Purpose|
|-------|--------|--------|
|GET|/api/books|List all books|
|GET|/api/books/:id|Get one book|
|POST|/api/books|Create a book|
|PUT|/api/books/:id|Replace book details|
|PATCH|/api/books/:id|Update selected fields|
|DELETE|/api/books/:id|Delete book|
|GET|/api/books/search?title=Node|Search by title|
|GET|/api/books/available|List available books|

## Instructions
- Use Node.js and Express.js with separate MVC routes, controllers, and model files.
- Use an in-memory JavaScript array; no database is required.
- Validate required fields, book IDs, and input values. Generate unique book IDs.
- Add unknown-route and centralized error-handling middleware. Return suitable HTTP status codes.
- Read the server port from an environment variable.
- Register /search and /available routes before /:id to avoid route conflicts.
- Test all endpoints using Postman or Thunder Client.
- Submit the complete code and a README.md with setup and testing instructions.


## Final Submission & Marking Policy
**Question 1 – Employee Task Management:** 100 marks, assessed using the evaluation criteria above.

**Question 2 – Library Management:** Compulsory submission, but not graded and carries 0 marks.

Both projects must be submitted separately, with their own source files and README instructions. Failure to submit Question 2 means the mandatory submission requirement has not been met, even though it carries no marks.

---

**Happy Coding!**
