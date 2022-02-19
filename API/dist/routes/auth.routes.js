"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const controller_1 = __importDefault(require("../controllers/controller"));
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/task", (req, res) => {
            controller_1.default.getTasks(req, res);
        });
        this.router.get("/task/:idTask", (req, res) => {
            controller_1.default.findTask(req, res);
        });
        this.router.post("/task", (req, res) => {
            controller_1.default.postTask(req, res);
        });
        this.router.put("/task/:idTask", (req, res) => {
            controller_1.default.putTask(req, res);
        });
        this.router.delete("/task/:idTask", (req, res) => {
            controller_1.default.deleteTask(req, res);
        });
    }
}
exports.Routes = Routes;
