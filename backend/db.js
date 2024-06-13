/*

todo {
    title:string
    description: string 
    completed: true or false
}

*/

require("dotenv").config();
const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect(process.env.MONGODB_URI);

const todoschema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoschema);

module.exports = { todo };
