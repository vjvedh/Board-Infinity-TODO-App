import express, { Application, Request, Response } from 'express';
import mongoose from "mongoose";

import * as todoController from "./api/controllers/todoController";

// Express APP Configuration
const app: Application = express();
app.use(express.json());
app.set("port", process.env.PORT || 5005);


const uri: string = "mongodb+srv://dbUser:dbUser@cluster.phm4v.gcp.mongodb.net/dbUser?retryWrites=true&w=majority";
mongoose.connect(process.env.uri || uri, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfully Connected!");
  }
});

// API Endpoint
app.get("/", (req: Request, res: Response) => res.send("Welcome to TODO checkpoint"));

// API Endpoints
app.get("/list", todoController.list);
app.post("/add", todoController.add);

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});