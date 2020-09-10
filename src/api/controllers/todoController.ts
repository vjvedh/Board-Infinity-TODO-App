// Importing Libraries
import { request, Request, Response } from "express";
import Todo from "../models/todo";
import tableCreate from "../config/config";

// Api Endpoint: After GET resquest is used it will fetch all todos from DB and showing it into web page 
export let list = (req: Request, res: Response) => {
  let todos = Todo.find((err: any, todos: any) => {
    if (err) {
      res.send("Error!");
    } else {
      let htmlTable = tableCreate(todos);
      res.send(htmlTable);
    }
  });
};

// Api Endpoint: After POST request if fetched it will take the request body mesaage and add it to todo schema in DB. 
export let add = (req: Request, res: Response) => {
  if (req.body.duration === '0') {
    req.body.expireAt = null;
  }
  else {
    let curr = new Date();
    let expireDate = new Date(curr);
    expireDate.setMinutes(curr.getMinutes() + parseInt(req.body.duration));
    req.body.expireAt = expireDate;
  }

  var todo = new Todo(req.body);

  todo.save((err: any) => {      
    if (err) {
      console.log("Error Adding: " + err);
      res.send(err);
    } else {
      console.log("\x1b[31m", "Data Added Successfully!!!\n" + todo, "\x1b[0m");
      res.send(todo);
    }
  });
};