"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing Libraries
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./connect"));
require('dotenv').config();
// Importing Modules from file
const todoController = __importStar(require("./api/controllers/todoController"));
const config_1 = require("./api/config/config");
// Express APP Configuration
const app = express_1.default();
app.use(express_1.default.json());
app.set("port", process.env.PORT || process.env.port);
// MongoDB Connection
connect_1.default(config_1.db);
// API Endpoint for welcome page
app.get("/", (req, res) => res.send(config_1.homePage));
// API Endpoints for show and add section
app.get("/list", todoController.list);
app.post("/add", todoController.add);
// Connection part for localserver for node app
const server = app.listen(app.get("port"), () => {
    console.log("\x1b[32m", `App is running on http://localhost:${app.get("port")}`, "\x1b[0m");
});
