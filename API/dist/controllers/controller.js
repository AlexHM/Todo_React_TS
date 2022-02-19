"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../models/task"));
class Controller {
    getTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.default.find();
            if (task) {
                return res.status(200).json(task);
            }
            return res.status(404).json({ res: "Task not found" });
        });
    }
    findTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.default.findOne({ _id: req.params.idTask });
            if (task) {
                return res.status(200).json(task);
            }
            return res.status(404).json({ res: "Task not found" });
        });
    }
    postTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = new task_1.default(req.body);
            if (task) {
                task.date = new Date();
                yield task.save();
                return res.status(201).json(task);
            }
            return res.status(404).json({ res: "Can't add the task" });
        });
    }
    putTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = req.body;
            const updateTask = yield task_1.default.updateOne({ _id: req.params.idTask }, change);
            if (updateTask) {
                return res.status(200).json(updateTask);
            }
            return res.status(404).json({ Error: "Error to update the task" });
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield task_1.default.deleteOne({ _id: req.params.idTask });
            if (task) {
                return res.status(200).json({ res: "Deleted successfully" });
            }
            return res.status(404).json({ res: "Can't delete the task" });
        });
    }
}
exports.default = new Controller();
