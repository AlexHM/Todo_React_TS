import React, { useState, useEffect } from "react";
import Task from "../Task";
import TaskItem from "../TaskItem";
import * as TaskService from "../TaskService";

const TaskList = () => {
  const [Task, setTask] = useState<Task[]>([]);

  const loadTask = async () => {
    const res = await TaskService.getTask();
    setTask(res.data);
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <div className="row">
      {Task.map((tasks) => {
        return <TaskItem task={tasks} key={tasks._id} loadTask={loadTask} />;
      })}
    </div>
  );
};

export default TaskList;
