
import Task from "../models/taskModel";

// Allowed values
const priorities = ["Low", "Medium", "High"];

const statuses = [
    "Pending",
    "In Progress",
    "Completed"
];

// Validate task data
const validateTask = (data, isPartial = false) => {
    const errors = [];

    const requiredFields = [
        "title",
        "description",
        "assignedTo",
        "priority",
        "status",
        "dueDate"
    ];

    // Check required fields for POST and PUT
    if (!isPartial) {
        requiredFields.forEach(field => {
            if (
                data[field] === undefined ||
                data[field] === null ||
                typeof data[field] !== "string" ||
                data[field].trim() === ""
            ) {
                errors.push(`${field} is required and must be a non-empty string`);
            }
        });
    } else {
        // PATCH must contain at least one field
        if (Object.keys(data).length === 0) {
            errors.push("Provide at least one field to update");
        }

        Object.keys(data).forEach(field => {
            if (!requiredFields.includes(field)) {
                errors.push(`Invalid field: ${field}`);
            }
        });
    }

    // Validate individual fields
    requiredFields.forEach(field => {
        if (data[field] !== undefined) {
            if (
                typeof data[field] !== "string" ||
                data[field].trim() === ""
            ) {
                errors.push(`${field} must be a non-empty string`);
            }
        }
    });

    // Validate priority
    if (
        data.priority !== undefined &&
        !priorities.includes(data.priority)
    ) {
        errors.push("Priority must be Low, Medium, or High");
    }

    // Validate status
    if (
        data.status !== undefined &&
        !statuses.includes(data.status)
    ) {
        errors.push("Status must be Pending, In Progress, or Completed");
    }

    // Validate date
    if (data.dueDate !== undefined) {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        const date = new Date(`${data.dueDate}T00:00:00Z`);

        if (
            !datePattern.test(data.dueDate) ||
            Number.isNaN(date.getTime()) ||
            date.toISOString().slice(0, 10) !== data.dueDate
        ) {
            errors.push("dueDate must be a valid YYYY-MM-DD date");
        }
    }

    return errors;
};

// Validate ID
const validateId = (id) => {
    const taskId = Number(id);

    if (!Number.isInteger(taskId) || taskId <= 0) {
        return null;
    }

    return taskId;
};

// GET /api/tasks
const getAllTasks = (req, res) => {
    const tasks = Task.getAllTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

// GET /api/tasks/:id
const getTaskById = (req, res, next) => {
    const id = validateId(req.params.id);

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const task = Task.getTaskById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
};

// POST /api/tasks
const createTask = (req, res) => {
    const errors = validateTask(req.body);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    const taskData = {};

    Object.keys(req.body).forEach(field => {
        taskData[field] = req.body[field].trim();
    });

    const newTask = Task.createTask(taskData);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask
    });
};

// PUT /api/tasks/:id
const updateTask = (req, res) => {
    const id = validateId(req.params.id);

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const existingTask = Task.getTaskById(id);

    if (!existingTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const errors = validateTask(req.body);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
    return ["Request body must be a JSON object"];
    }
    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    const taskData = {};

    Object.keys(req.body).forEach(field => {
        taskData[field] = req.body[field].trim();
    });

    const updatedTask = Task.updateTask(id, taskData);

    res.status(200).json({
        success: true,
        message: "Task completely updated",
        data: updatedTask
    });
};

// PATCH /api/tasks/:id
const patchTask = (req, res) => {
    const id = validateId(req.params.id);

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const existingTask = Task.getTaskById(id);

    if (!existingTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const errors = validateTask(req.body, true);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors
        });
    }

    const taskData = {};

    Object.keys(req.body).forEach(field => {
        taskData[field] = req.body[field].trim();
    });

    const updatedTask = Task.patchTask(id, taskData);

    res.status(200).json({
        success: true,
        message: "Selected task fields updated successfully",
        data: updatedTask
    });
};

// DELETE /api/tasks/:id
const deleteTask = (req, res) => {
    const id = validateId(req.params.id);

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const deletedTask = Task.deleteTask(id);

    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask
    });
};

// GET /api/tasks/status/:status
const getTasksByStatus = (req, res) => {
    const status = req.params.status;

    if (!statuses.some(
        item => item.toLowerCase() === status.toLowerCase()
    )) {
        return res.status(400).json({
            success: false,
            message: "Invalid status. Use Pending, In Progress, or Completed"
        });
    }

    const tasks = Task.getTasksByStatus(status);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

// GET /api/tasks/priority/:priority
const getTasksByPriority = (req, res) => {
    const priority = req.params.priority;

    if (!priorities.some(
        item => item.toLowerCase() === priority.toLowerCase()
    )) {
        return res.status(400).json({
            success: false,
            message: "Invalid priority. Use Low, Medium, or High"
        });
    }

    const tasks = Task.getTasksByPriority(priority);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

// GET /api/tasks/summary
const getTaskSummary = (req, res) => {
    const summary = Task.getTaskSummary();

    res.status(200).json({
        success: true,
        data: summary
    });
};

// GET /api/tasks/employee/:name
const getTasksByEmployee = (req, res) => {
    const name = req.params.name.trim();

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Employee name is required"
        });
    }

    const tasks = Task.getTasksByEmployee(name);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

// GET /api/tasks/overdue
const getOverdueTasks = (req, res) => {
    const tasks = Task.getOverdueTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    patchTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary,
    getTasksByEmployee,
    getOverdueTasks
};
