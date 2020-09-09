"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.list = void 0;
const todo_1 = __importDefault(require("../models/todo"));
// Setting a duration variable to store duration period of current todo item added
var dur = 0;
// Api Endpoint: After GET resquest is used it will fetch all todos from DB and showing it into web page 
exports.list = (req, res) => {
    let todos = todo_1.default.find((err, todos) => {
        if (err) {
            res.send("Error!");
        }
        else {
            let htmlTableRows = ``;
            let data = { rows: todos };
            data.rows.forEach((row) => {
                htmlTableRows += `<tr>
        <td>${row.taskName}</td>
        <td>${row.taskDescription}</td>
        <td>${row.creator}</td>
        <td>${row.duration}</td>
        <td>${row.createdAt}</td>
      </tr>`;
            });
            res.send(`<!DOCTYPE html>
      <html>
        <head>
            <style>
                table {
                    border-collapse: collapse;
                    width: 100%; }
                th, td {
                    text-align: left;
                    padding: 8px; }
                tr:nth-child(even) {background-color: #f2f2f2; }
            </style>
        </head>
      <body>
        <h2>TODO List</h2>
        <div style="overflow-x:auto;">
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Task Description
                    </th><th>Creator</th>
                    <th>Duration(in mins)</th>
                    <th>Created At</th>
                </tr>
            ${htmlTableRows}
            </table>
        </div>
      </body>
      </html>`);
        }
    });
};
// Api Endpoint: After POST request if fetched it will take the request body mesaage and add it to todo schema in DB. 
exports.add = (req, res) => {
    var todo = new todo_1.default(req.body);
    dur = 60 * req.body.duration;
    todo.save((err) => {
        if (err) {
            console.log("Error Adding: " + err);
            res.send(err);
        }
        else {
            console.log("\x1b[31m", "Data Added Successfully!!!\n" + todo, "\x1b[0m");
            res.send(todo);
        }
    });
};
exports.default = dur;
