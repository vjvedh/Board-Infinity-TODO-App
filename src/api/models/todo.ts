import mongoose, { Schema, Document } from "mongoose";
import dur from "../controllers/todoController";

export const TodoSchema = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  creator: { type: String, required: true },
  duration: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now,  }
});

TodoSchema.index({"createdAt": 1}, {expireAfterSeconds: dur})

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;