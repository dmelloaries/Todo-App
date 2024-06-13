const express = require("express");
const { createTodo, updateTodo } = require("./types");
const todo = require("./db.js"); // Import the todo model

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You passed the wrong inputs",
    });
    return;
  }
  // else put it in mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "error",
    });
    return;
  }

  // else put and mark as completed
  await todo.updateOne(
    { _id: updatePayload.id }, // Filter to find the document to update
    { $set: { completed: true } } // Update operation
  );

  res.json({
    msg: "Todo Updated",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
