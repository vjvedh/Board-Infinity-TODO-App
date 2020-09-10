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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = void 0;
// Importing Mongoose library for creating schema model
const mongoose_1 = __importStar(require("mongoose"));
// Schema
exports.TodoSchema = new mongoose_1.Schema({
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
    creator: { type: String, required: true },
    duration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now, required: false },
    expireAt: { type: Date, default: Date.now }
});
// Passing duration so that it delete the last document at particular time 
exports.TodoSchema.index({ "expireAt": 1 }, { expireAfterSeconds: 0 });
const Todo = mongoose_1.default.model("Todo", exports.TodoSchema);
exports.default = Todo;
