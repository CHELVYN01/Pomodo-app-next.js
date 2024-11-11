import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001/posts";

export const getAllTodos = async (): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};
