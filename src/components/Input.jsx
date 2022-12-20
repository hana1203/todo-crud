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
  className,
}) => {
  return (
    <InputWrapper>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      ></input>
      {isError && <p>{errMsg}</p>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  > input {
    border: none;
    background-color: lavender;
    width: 10rem;
    height: 2rem;
    padding: 16px;

    &.big {
      width: 16.5rem;
      border-radius: 56px;
      font-size: 16px;
    }
  }
  > p {
    color: red;
  }
`;
