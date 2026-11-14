
const express = require("express");

const router = express.Router();

import * as taskController from "../controllers/taskController.js";

// Additional challenge routes
router.get("/summary", taskController.getTaskSummary);

router.get("/overdue", taskController.getOverdueTasks);

router.get("/employee/:name", taskController.getTasksByEmployee);

// Filtering routes
router.get("/status/:status", taskController.getTasksByStatus);

router.get("/priority/:priority", taskController.getTasksByPriority);

// Main CRUD routes
router.get("/", taskController.getAllTasks);

router.post("/", taskController.createTask);

router.get("/:id", taskController.getTaskById);

router.put("/:id", taskController.updateTask);

router.patch("/:id", taskController.patchTask);

router.delete("/:id", taskController.deleteTask);

export default router
