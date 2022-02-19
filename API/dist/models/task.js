"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
});
exports.default = (0, mongoose_1.model)("tasks", taskSchema);
