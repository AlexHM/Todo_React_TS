//Import libraries
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//components to import
import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/Tasks/myTasks/TaskList";
import TaskForm from "./components/Tasks/addTasks/TaskForm";

//stylesheets
import "./index.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new-task" element={<TaskForm />} />
          <Route path="/update/:id" element={<TaskForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
