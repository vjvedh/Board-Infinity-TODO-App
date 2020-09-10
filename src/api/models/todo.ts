// Importing Mongoose library for creating schema model
import mongoose, { Schema } from "mongoose";

// Schema
export const TodoSchema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  creator: { type: String, required: true },
  duration: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, required: false },
  expireAt: { type: Date, default: Date.now }
});

// Passing duration so that it delete the last document at particular time 
TodoSchema.index({"expireAt": 1}, {expireAfterSeconds: 0})

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;