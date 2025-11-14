const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Fake database
let todos = [];
let nextId = 1;

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET todo by ID
app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

// POST create todo
app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });

  const newTodo = { id: nextId++, title, completed: false };
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// PUT update todo
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Todo Service running on port ${PORT}`);
});
