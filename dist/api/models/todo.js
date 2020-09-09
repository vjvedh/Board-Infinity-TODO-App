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
exports.TodoSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const todoController_1 = __importDefault(require("../controllers/todoController"));
exports.TodoSchema = new mongoose_1.Schema({
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    creator: { type: String, required: true },
    duration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, }
});
exports.TodoSchema.index({ "createdAt": 1 }, { expireAfterSeconds: todoController_1.default });
const Todo = mongoose_1.default.model("Todo", exports.TodoSchema);
exports.default = Todo;
