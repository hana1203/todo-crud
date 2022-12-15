import { instance } from "./config";

export const createTodo = async (todoBody) => {
  try {
    const { data } = await instance.post("/todos", {
      todo: todoBody,
    });
    console.log("data", data); //{todo: '할일2', userId: 4840, id: 8718, isCompleted: false}
  } catch (err) {
    console.log(err);
  }
};

//useEffect안에서 getTodos불러오고 그 안의 요소를 setTodo로 상태변경
// export const getTodos = async () => {
//   try {
//     const { data } = await instance.get("/todos");
//     console.log("data", data); //[{id: 8807, todo: '1234', isCompleted: false, userId: 4840}, {…}]
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getTodos = async ({ setTodoList }) => {
  try {
    const { data } = await instance.get("/todos");
    console.log("data", data); //[{id: 8807, todo: '1234', isCompleted: false, userId: 4840}, {…}]
    setTodoList(data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    await instance.delete(`/todos/${id}`);
  } catch (err) {
    console.log(err);
    alert(err.response.data.message);
  }
};

export const updateTodo = async (id, todoBody, isCompletedBody) => {
  try {
    const { data } = await instance.put(`/todos/${id}`, {
      todo: todoBody,
      isCompleted: isCompletedBody,
    });
    console.log("업데이트데잍터", data);
  } catch (err) {
    console.log(err);
  }
};
