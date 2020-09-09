import { Request, Response } from "express";
import Todo from "../models/todo";

var dur: number = 0; 

export let list = (req: Request, res: Response) => {
  let todos = Todo.find((err: any, todos: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(todos);
    }
  });
};

export let add = (req: Request, res: Response) => {
  var todo = new Todo(req.body);
  todo.save((err: any) => {      
    if (err) {
      console.log("Error Adding: " + err);
      res.send(err);
    } else {
      console.log("Data Added Successfully!!!\n" + todo);
      res.send(todo);
      dur = req.body.duration;
      console.log(dur);
    }
  });
};

export default dur;