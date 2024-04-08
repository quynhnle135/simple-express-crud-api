const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  try {
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to get all tasks." });
  }
});

app.get("/tasks/:id", (req, res) => {
  try {
    let id = req.params.id;
    let task = tasks.find((task) => task.id == id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to get task." });
  }
});

app.post("/tasks", (req, res) => {
  try {
    let newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      desc: req.body.desc || "No Description", // set "No Description" as task's default description
      completed: req.body.completed || false, // set "false" as default task's completed
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Failed to create new task." });
  }
});

app.put("/tasks/:id", (req, res) => {
  try {
    let id = req.params.id;
    let task = tasks.find((task) => task.id == id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    task.title = req.body.title || task.title;
    task.desc = req.body.desc || task.desc;
    task.completed = req.body.completed || task.completed;
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to update task" });
  }
});

app.delete("/tasks/:id", (req, res) => {
  try {
    let id = req.params.id;
    let index = tasks.findIndex((task) => task.id == id);
    if (index == -1) {
      return res.status(404).json({ message: "Task not found" });
    }
    tasks.splice(index, 1);
    res.status(204).json({ message: "Task is deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete task" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}/tasks`);
});
