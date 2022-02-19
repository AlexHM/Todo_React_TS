import axios from "axios";
import Task from "./Task";

const API = "http://localhost:4000";

export const getTask = async () => {
  return await axios.get<Task[]>(`${API}/task`);
};
export const findTask = async (id: string) => {
  return await axios.get<Task>(`${API}/task/${id}`);
};
export const postTask = async (task: Task) => {
  return await axios.post(`${API}/task`, task);
};
export const putTask = async (id: string, task: Task) => {
  return await axios.put(`${API}/task/${id}`, task);
};
export const deleteTask = async (id: string) => {
  return await axios.delete(`${API}/task/${id}`);
};
