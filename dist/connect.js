"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (db) => {
    const connect = () => {
        mongoose_1.default
            .connect(process.env.uri || db, { useNewUrlParser: true })
            .then(() => {
            return console.log("\x1b[32m", "Successfully connected to Database", "\x1b[0m");
        })
            .catch(error => {
            console.log("Error connecting to database: ", error);
            return process.exit(1);
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
