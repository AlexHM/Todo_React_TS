import { Router, Request, Response } from "express";
import Controller from "../controllers/controller";

export class Routes {
  router: Router;
  constructor() {
    this.router = Router();

    this.router.get("/task", (req: Request, res: Response) => {
      Controller.getTasks(req, res);
    });
    this.router.get("/task/:idTask", (req: Request, res: Response) => {
      Controller.findTask(req, res);
    });
    this.router.post("/task", (req: Request, res: Response) => {
      Controller.postTask(req, res);
    });
    this.router.put("/task/:idTask", (req: Request, res: Response) => {
      Controller.putTask(req, res);
    });
    this.router.delete("/task/:idTask", (req: Request, res: Response) => {
      Controller.deleteTask(req, res);
    });
  }
}
