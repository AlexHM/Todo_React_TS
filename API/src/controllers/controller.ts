import { Request, Response } from "express";
import Task from "../models/task";

class Controller {
  public async getTasks(req: Request, res: Response) {
    const task = await Task.find();
    if (task) {
      return res.status(200).json(task);
    }
    return res.status(404).json({ res: "Task not found" });
  }
  public async findTask(req: Request, res: Response) {
    const task = await Task.findOne({ _id: req.params.idTask });
    if (task) {
      return res.status(200).json(task);
    }
    return res.status(404).json({ res: "Task not found" });
  }
  public async postTask(req: Request, res: Response) {
    const task = new Task(req.body);

    if (task) {
      task.date = new Date();
      await task.save();
      return res.status(201).json(task);
    }
    return res.status(404).json({ res: "Can't add the task" });
  }
  public async putTask(req: Request, res: Response) {
    const change = req.body;

    const updateTask = await Task.updateOne({ _id: req.params.idTask }, change);
    if (updateTask) {
      return res.status(200).json(updateTask);
    }

    return res.status(404).json({ Error: "Error to update the task" });
  }
  public async deleteTask(req: Request, res: Response) {
    const task = await Task.deleteOne({ _id: req.params.idTask });
    if (task) {
      return res.status(200).json({ res: "Deleted successfully" });
    }

    return res.status(404).json({ res: "Can't delete the task" });
  }
}

export default new Controller();
