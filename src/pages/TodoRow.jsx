import { useState } from "react";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../apis/todo";
import { Button } from "../components/Button";

export const TodoRow = ({ id, todo, isCompleted, setIsLIstUpdated }) => {
  const [editId, setEditId] = useState(null);
  const [edittedInput, setEdittedInput] = useState(todo);
  const [isChecked, setIsChecked] = useState(isCompleted);

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
  const submitEdittedInput = (id, edittedInput, isChecked) => {
    updateTodo(id, edittedInput, isChecked);
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
    console.log("edittedInput", edittedInput);
  };

  return (
    <TodoWrapper key={id}>
      <CheckBox
        type="checkbox"
        defaultChecked={isCompleted}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      {editId === id ? (
        <>
          <TodoEditContent
            defaultValue={todo}
            onChange={handleEdittedChange}
          ></TodoEditContent>
          <Button
            className="small"
            onClick={() => submitEdittedInput(id, edittedInput, isChecked)}
          >
            제출
          </Button>
          <Button className="small" onClick={() => cancelEdittedInput(id)}>
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
  );
};

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
