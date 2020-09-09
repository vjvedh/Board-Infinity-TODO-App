// Importing Mongoose library for creating schema model
import mongoose, { Schema } from "mongoose";

// Importing duration variable from add api response from todocontroller
import dur from "../controllers/todoController";

// Schema
export const TodoSchema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  creator: { type: String, required: true },
  duration: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Passing duration so that it delete the last document at particular time 
TodoSchema.index({"createdAt": 1}, {expireAfterSeconds: dur})

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;