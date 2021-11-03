import axios from "axios";
import { Todo } from "../../types"
const baseUrl = "http://localhost:8000";

const urls = {
  add: `${baseUrl}/add-todo`,
  edit: `${baseUrl}/edit-todo`,
  delete: `${baseUrl}/delete-todo`,
  toggle: `${baseUrl}/toggle-todo`,
  removeDone: `${baseUrl}/remove-done-todos`,
  clearAll: `${baseUrl}/clear-todos`,
  get: `${baseUrl}/todos`,
};

const getTodos = async () => {
  return axios.get(urls.get).then((res) => res.data as Todo[]);
};

const addTodo = async (title: string) => {
  await axios.post(urls.add, { title });
};

const deleteTodo = async (id: string) => {
  await axios.post(urls.delete, { id });
};

const editTodo = async (todo: Todo) => {
  await axios.post(urls.edit, { todo });
};

const toggleTodo = async (id: string) => {
  await axios.post(urls.toggle, { id });
};

const removeDoneTodos = async () => {
  await axios.post(urls.removeDone);
};

const clearAllTodos = async () => {
  await axios.post(urls.clearAll);
};

const todoApi = {
  // Executions
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo,
  removeDoneTodos,
  clearAllTodos,
  // Queries
  getTodos,
};

export default todoApi;
