import styled from "styled-components";

export const Button = ({ children, disabled, onClick }) => {
  return (
    <ButtonTag disabled={disabled} onClick={onClick}>
      {children}
    </ButtonTag>
  );
};

const ButtonTag = styled.button`
  width: 10rem;
  height: 2rem;
  border: none;

  &:disabled {
    cursor: none;
    background-color: whitesmoke;
  }
`;
