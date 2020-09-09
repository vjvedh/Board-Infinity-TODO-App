"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.list = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const config_1 = __importDefault(require("../config/config"));
// Setting a duration variable to store duration period of current todo item added
var dur = 0;
// Api Endpoint: After GET resquest is used it will fetch all todos from DB and showing it into web page 
exports.list = (req, res) => {
    let todos = todo_1.default.find((err, todos) => {
        if (err) {
            res.send("Error!");
        }
        else {
            let htmlTable = config_1.default(todos);
            res.send(htmlTable);
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
