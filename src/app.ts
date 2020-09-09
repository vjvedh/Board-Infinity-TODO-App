// Importing Libraries
import express, { Application, Request, Response } from 'express';
import connect from "./connect";

// Importing Modules from file
import * as todoController from "./api/controllers/todoController";
import { db } from "./api/config/config";

// Express APP Configuration
const app: Application = express();
app.use(express.json());
app.set("port", process.env.PORT || 5005);

// MongoDB Connection
connect(db);

// API Endpoint for welcome page
app.get("/", (req: Request, res: Response) => res.send("Welcome to TODO checkpoint"));

// API Endpoints for show and add section
app.get("/list", todoController.list);
app.post("/add", todoController.add);

// Connection part for localserver for node app
const server = app.listen(app.get("port"), () => {
    console.log("\x1b[32m", `App is running on http://localhost:${app.get("port")}`, "\x1b[0m");
});