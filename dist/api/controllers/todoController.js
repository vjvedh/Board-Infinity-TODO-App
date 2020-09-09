"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.list = void 0;
const todo_1 = __importDefault(require("../models/todo"));
var dur = 0;
exports.list = (req, res) => {
    let todos = todo_1.default.find((err, todos) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(todos);
        }
    });
};
exports.add = (req, res) => {
    var todo = new todo_1.default(req.body);
    todo.save((err) => {
        if (err) {
            console.log("Error Adding: " + err);
            res.send(err);
        }
        else {
            console.log("Data Added Successfully!!!\n" + todo);
            res.send(todo);
            dur = req.body.duration;
            console.log(dur);
        }
    });
};
exports.default = dur;
