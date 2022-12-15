import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../apis/todo";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isLIstUpdated, setIsLIstUpdated] = useState(false);

  const [editId, setEditId] = useState(null);
  const [edittedInput, setEdittedInput] = useState("");

  const navigate = useNavigate();
  const submitTodo = (e) => {
    e.preventDefault();
    createTodo(todoInput);
    setIsLIstUpdated(true);
  };
  console.log(todoInput);

  //   const handleDelete = (id) => {
  //     if (!editMode) {
  //       deleteTodo(id);
  //       setIsLIstUpdated(true);
  //     } else if (editMode) {
  //       setEditMode(false);
  //     }
  //   };

  //   const handleEdit = (id) => {
  //     setEditId(id); //edit하려는 고유 id 저장
  //     if (!editMode) {
  //       //수정버튼
  //       setEditMode(true);
  //     } else if (editMode) {
  //       //인풋 제출하기
  //       setEditMode(false);
  //     }
  //   };

  useEffect(() => {
    // getTodos().then((aDataObj) => setTodoList(aDataObj));
    getTodos({ setTodoList });
    setIsLIstUpdated(false);

    //토큰없는 상태로 접속시 로그인페이지로 보내기
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, [isLIstUpdated, navigate]);
  console.log("todoList", todoList); // [{…}, {…}]
  // [{id: 8717, todo: '할일', isCompleted: false, userId: 4840},
  // {id: 8718, todo: '할일2', isCompleted: false, userId: 4840}]

  //수정 버튼 누르기
  const handleEdit = (id) => {
    setEditId(id);
  };
  //삭제 누르기
  const handleDelete = (id) => {
    deleteTodo(id);
    setIsLIstUpdated(true);
  };

  //input에 수정한 내용 제출하기
  const submitEdittedInput = (id, edittedInput, isCompleted) => {
    updateTodo(id, edittedInput, isCompleted);
    setIsLIstUpdated(true);
    setEditId(null);
  };

  //수정하던거 취소하기
  const cancelEdittedInput = () => {
    setEditId(null);
  };
  //수정 input 값 상태에 저장
  const handleEdittedChange = (e) => {
    setEdittedInput(e.target.value);
  };
  console.log("edittedInput", edittedInput);

  const onChangeCheckbox = () => {};

  return (
    <>
      <h3>🧸 할 일을 하자</h3>
      <TodoInputForm onSubmit={submitTodo}>
        <Input
          className="big"
          onChange={(e) => setTodoInput(e.target.value)}
        ></Input>
        <Button className="medium" disabled={todoInput.length === 0}>
          추가
        </Button>
      </TodoInputForm>

      <TodoListContainer>
        {todoList &&
          todoList.map(({ id, todo, isCompleted }) => (
            <TodoWrapper key={id}>
              <CheckBox
                type="checkbox"
                checked={isCompleted}
                onChange={onChangeCheckbox}
              />
              {/* {!editMode && <TodoContent>{todo}</TodoContent>}
              {editMode && editId === id && (
                <TodoEditContent value={todo}></TodoEditContent>
              )}
              <Button className="small" onClick={() => handleEdit(id)}>
                {!editMode ? "수정" : "제출"}
              </Button>
              <Button className="small" onClick={() => handleDelete(id)}>
                {!editMode ? "삭제" : "취소"}
              </Button> */}

              {editId === id ? (
                <>
                  <TodoEditContent
                    defaultValue={todo}
                    onChange={handleEdittedChange}
                  ></TodoEditContent>
                  <Button
                    className="small"
                    onClick={() =>
                      submitEdittedInput(id, edittedInput, isCompleted)
                    }
                  >
                    제출
                  </Button>
                  <Button
                    className="small"
                    onClick={() => cancelEdittedInput(id)}
                  >
                    취소
                  </Button>
                </>
              ) : (
                <>
                  <TodoContent>{todo}</TodoContent>
                  <Button className="small" onClick={() => handleEdit(id)}>
                    수정
                  </Button>
                  <Button className="small" onClick={() => handleDelete(id)}>
                    삭제
                  </Button>
                </>
              )}
            </TodoWrapper>
          ))}
      </TodoListContainer>
    </>
  );
};

const TodoInputForm = styled.form`
  display: flex;
`;

const TodoListContainer = styled.div``;
const TodoWrapper = styled.div`
  display: flex;
`;

const CheckBox = styled.input``;
const TodoContent = styled.div`
  background-color: cornsilk;
  width: 18rem;
  height: 2rem;
  /* border-radius: 56px; */
  font-size: 16px;
`;

const TodoEditContent = styled.input``;
