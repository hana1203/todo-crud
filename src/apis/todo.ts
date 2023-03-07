import { isAxiosError } from "axios";
import { TodoObj } from "../types/type";
import { instance } from "./config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface TodoPayload {
  todoBody: string;
  id?: string;
  isCompletedBody?: boolean;
}

export const createTodo = async ({ todoBody }: TodoPayload) => {
  try {
    const { data } = await instance.post("/todos", {
      todo: todoBody,
    });
    console.log("크리에잇data", data); //{todo: '할일2', userId: 4840, id: 8718, isCompleted: false}
  } catch (err) {
    console.log(err);
  }
};

export const getTodos = async (): Promise<TodoObj[] | undefined> => {
  try {
    const { data } = await instance.get("/todos");
    console.log("겟투두data", data); //[{id: 8807, todo: '1234', isCompleted: false, userId: 4840}, {…}]
    return data;
  } catch (err) {
    if (isAxiosError(err)) {
      toast.error(err.response?.data.message);
    }
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await instance.delete(`/todos/${id}`);
    console.log("딜리트투두 fired");
  } catch (err) {
    if (isAxiosError(err)) {
      toast.error(err.response?.data.message);
    }
    console.log(err);
  }
};

export const updateTodo = async (
  id: string,
  todoBody: string,
  isCompletedBody: boolean
) => {
  try {
    const { data } = await instance.put(`/todos/${id}`, {
      todo: todoBody,
      isCompleted: isCompletedBody,
    });
    console.log("업데이트data", data);
  } catch (err) {
    if (isAxiosError(err)) {
      toast.error(err.response?.data.message);
    }
    console.log(err);
  }
};
