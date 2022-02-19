import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import Task from "../Task";
import * as TaskService from "../TaskService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "./AddTask.css";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const initialState = { title: "", description: "", date: "" };
  const [task, settask] = useState<Task>(initialState);

  const handleInputChange = (e: InputChange) => {
    settask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await TaskService.postTask(task);
      toast.success("New task created!");
      settask(initialState);
    } else {
      await TaskService.putTask(params.id, task);
      toast.success("Updated successfully task");
    }

    navigate("/");
  };
  const findVideo = async (id: string) => {
    const res = await TaskService.findTask(id);
    const { title, description } = res.data;
    settask({ title, description });
  };
  useEffect(() => {
    if (params.id) findVideo(params.id);
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="form-card card-body">
            <h3 className="titleTask">New Task</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Type the task title"
                  className="text-form  form-control"
                  value={task.title}
                  autoFocus
                  onChange={handleInputChange}
                />

                <div className="form-group">
                  <textarea
                    name="description"
                    rows={3}
                    value={task.description}
                    className="text-form form-control"
                    placeholder="Type the task"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                {params.id ? (
                  <button className="send-btn btn btn-info">Update task</button>
                ) : (
                  <button className="send-btn btn btn-info">Add task</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
