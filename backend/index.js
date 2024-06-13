const { express } = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "YOu passed the wrong inputs",
    });
    return;
  }
  //else put it in mongodb
});

app.post("/create", (req, res) => {
  res.send("Created a todo");
});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: " error",
    });
    return;
  }

  //else put and mark as completed
});
