import { useState } from "react";
import styled, { css } from "styled-components";
import { deleteTodo, updateTodo } from "../apis/todo";
import { Button } from "../components/Button";
interface Props {
  id: string;
  todo: string;
  isCompleted: boolean;
  setIsLIstUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TodoRow = ({ id, todo, isCompleted, setIsLIstUpdated }: Props) => {
  const [editId, setEditId] = useState<string | null>(null);
  const [edittedInput, setEdittedInput] = useState<string>(todo);
  const [isChecked, setIsChecked] = useState<boolean>(isCompleted);

  //수정 버튼 누르기
  const handleEdit = (id: string) => {
    setEditId(id);
  };
  //삭제 누르기
  const handleDelete = (id: string) => {
    deleteTodo(id);
    setIsLIstUpdated(true);
  };

  //input에 수정한 내용 제출하기
  const submitEdittedInput = (
    id: string,
    edittedInput: string,
    isChecked: boolean
  ) => {
    updateTodo(id, edittedInput, isChecked);
    setIsLIstUpdated(true);
    setEditId(null);
  };

  //수정하던거 취소하기
  const cancelEdittedInput = (id: string) => {
    setEditId(null);
  };
  //수정 input 값 상태에 저장
  const handleEdittedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          {/* <TodoContent strikeThrough={isChecked}>{todo}</TodoContent> */}
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
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

const CheckBox = styled.input`
  cursor: pointer;
`;
const TodoContent = styled.div`
  background-color: cornsilk;
  width: 14rem;
  /* height: 2rem; */
  height: auto;
  font-size: 16px;
  line-height: 2rem; //박스에서 글자가 가운데오도록
  padding-left: 4px;

  //isChecked 줄긋기
  ${({ strikeThrough }: any) =>
    strikeThrough &&
    css`
      text-decoration: line-through;
      color: grey;
    `}
`;

const TodoEditContent = styled.input`
  width: 14rem;
  font-size: 16px;
`;
