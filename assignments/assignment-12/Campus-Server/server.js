
const http = require("http");

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {

  console.log("Request URL:", req.url);

  // Route 1: Home Page
  if (req.url === "/") {

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end("Welcome to SMIT !");

  }

  // Route 2: About
  else if (req.url === "/about") {

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end(
      "SMIT  provides quality education and professional training."
    );

  }

  // Route 3: Courses
  else if (req.url === "/courses") {

    res.writeHead(200, {
      "Content-Type": "text/plain"
    });

    res.end(
      "Available Courses:\n" +
      "1. Backend Development\n" +
      "2. Artificial Intelligence\n" +
      "3. Computer Science"
    );

  }

  // Route 4: Students
  else if (req.url === "/students") {

    const students = [
      {
        id: 1,
        name: "Afia",
        course: "Backend Development"
      },
      {
        id: 2,
        name: "Sara",
        course: "Artificial Intelligence"
      },
      {
        id: 3,
        name: "Ahmed",
        course: "Computer Science"
      }
    ];

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify(students, null, 2));

  }

  // Route 5: Unknown URL
  else {

    res.writeHead(404, {
      "Content-Type": "text/plain"
    });

    res.end("Page Not Found");

  }

});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
