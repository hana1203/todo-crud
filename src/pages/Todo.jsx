import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../apis/todo";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TodoRow } from "./TodoRow";

export const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isLIstUpdated, setIsLIstUpdated] = useState(false);

  // const [editId, setEditId] = useState(null);
  // const [edittedInput, setEdittedInput] = useState();

  // const [isChecked, setIsChecked] = useState();

  const navigate = useNavigate();
  const submitTodo = (e) => {
    e.preventDefault();
    createTodo(todoInput);
    setIsLIstUpdated(true);
  };
  console.log(todoInput);

  useEffect(() => {
    // getTodos().then((aDataObj) => setTodoList(aDataObj));
    getTodos({ setTodoList });
    setIsLIstUpdated(false);

    //토큰없는 상태로 접속시 로그인페이지로 보내기
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [isLIstUpdated]);
  console.log("todoList", todoList); // [{…}, {…}]
  // [{id: 8717, todo: '할일', isCompleted: false, userId: 4840},
  // {id: 8718, todo: '할일2', isCompleted: false, userId: 4840}]

  return (
    <>
      <h3>🧸 할 일을 하자</h3>
      <TodoInputForm onSubmit={submitTodo}>
        <Input
          className="big"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        ></Input>
        <Button className="medium" disabled={todoInput.length === 0}>
          추가
        </Button>
      </TodoInputForm>

      <TodoListContainer>
        {todoList &&
          todoList.map(({ id, todo, isCompleted }) => (
            <TodoRow
              key={id}
              id={id}
              todo={todo}
              isCompleted={isCompleted}
              setIsLIstUpdated={setIsLIstUpdated}
            ></TodoRow>
          ))}
      </TodoListContainer>
    </>
  );
};

const TodoInputForm = styled.form`
  display: flex;
`;

const TodoListContainer = styled.div``;
