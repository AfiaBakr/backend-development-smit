
import tasks, { find, length, map, push, findIndex, splice, filter } from "/data/tasks";

// Get all tasks
const getAllTasks = () => {
    return tasks;
};

// Get task by ID
const getTaskById = (id) => {
    return find(task => task.id === id);
};

// Generate unique ID
const generateTaskId = () => {
    if (length === 0) {
        return 1;
    }

    return Math.max(...map(task => task.id)) + 1;
};

// Create new task
const createTask = (taskData) => {
    const newTask = {
        id: generateTaskId(),
        ...taskData
    };

    push(newTask);

    return newTask;
};

// Update complete task
const updateTask = (id, taskData) => {
    const index = findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    tasks[index] = {
        id,
        ...taskData
    };

    return tasks[index];
};

// Update selected fields
const patchTask = (id, taskData) => {
    const task = getTaskById(id);

    if (!task) {
        return null;
    }

    Object.assign(task, taskData);

    return task;
};

// Delete task
const deleteTask = (id) => {
    const index = findIndex(task => task.id === id);

    if (index === -1) {
        return null;
    }

    return splice(index, 1)[0];
};

// Filter by status
const getTasksByStatus = (status) => {
    return filter(
        task => task.status.toLowerCase() === status.toLowerCase()
    );
};

// Filter by priority
const getTasksByPriority = (priority) => {
    return filter(
        task => task.priority.toLowerCase() === priority.toLowerCase()
    );
};

// Task summary
const getTaskSummary = () => {
    return {
        totalTasks: length,
        pending: filter(task => task.status === "Pending").length,
        inProgress: filter(task => task.status === "In Progress").length,
        completed: filter(task => task.status === "Completed").length
    };
};

// Tasks assigned to employee
const getTasksByEmployee = (name) => {
    return filter(
        task => task.assignedTo.toLowerCase() === name.toLowerCase()
    );
};

// Overdue tasks
const getOverdueTasks = () => {
    const today = new Date().toISOString().split("T")[0];

    return filter(
        task => task.dueDate < today && task.status !== "Completed"
    );
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
