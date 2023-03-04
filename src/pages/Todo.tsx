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
  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo({ todoBody: todoInput });
    setIsLIstUpdated(true);
    setTodoInput(""); //추가시 input 값 비우기
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
    <TodoInputListContainer>
      <TodoInputListWrapper>
        <h3>오늘 할 일</h3>
        <TodoInputForm onSubmit={(e) => submitTodo(e)}>
          <Input
            className="big"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodoInput(e.target.value)
            }
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
      </TodoInputListWrapper>
    </TodoInputListContainer>
  );
};

const TodoInputListContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
`;
const TodoInputListWrapper = styled.div`
  background-color: white;
  width: 24rem;
  /* height: auto; */
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > h3 {
    text-align: center;
    margin: 16px 0;
  }
`;

const TodoInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoListContainer = styled.div`
  margin: 16px 0;
`;
