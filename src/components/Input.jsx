import { useState } from "react";
import styled from "styled-components";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  isError,
  errMsg,
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
      {isError && <p>{errMsg}</p>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  > input {
    border: none;
    border-radius: 10px;
    background-color: lavender;
  }
  > p {
    color: red;
  }
`;
