
const express = require("express");

const app = express();

// Import routes
import taskRoutes from "./routes/taskRoutes.js";

// Import middleware
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Parse incoming JSON data
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Employee Task Management API"
    });
});

// Task routes
app.use("/api/tasks", taskRoutes);

// Unknown route middleware
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

export default app
