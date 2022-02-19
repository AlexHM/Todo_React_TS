import React from "react";
import Task from "./Task";
import * as TaskService from "./TaskService";
import "./myTasks/ListTask.css";
import { useNavigate } from "react-router-dom";

interface Props {
  task: Task;
  loadTask: () => void;
}

const TaskItem = ({ task, loadTask }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await TaskService.deleteTask(id);
    loadTask();
  };

  return (
    <div className="col-md-4">
      <div className="task-card card card-body msg-card">
        <div className="d-flex justify-content-between">
          <h2 onClick={() => navigate(`/update/${task._id}`)}>{task.title}</h2>
          <span
            className="text-danger"
            onClick={() => task._id && handleDelete(task._id)}
          >
            x
          </span>
        </div>
        <p onClick={() => navigate(`/update/${task._id}`)}>
          {task.description}
        </p>
        <p onClick={() => navigate(`/update/${task._id}`)}>{task.date}</p>
      </div>
    </div>
  );
};
export default TaskItem;
