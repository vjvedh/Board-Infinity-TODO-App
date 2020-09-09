"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require('dotenv').config();
exports.db = `mongodb+srv://${process.env.dbUsername}:${process.env.dbUsername}@cluster.phm4v.gcp.mongodb.net/${process.env.dbPassword}?retryWrites=true&w=majority`;
