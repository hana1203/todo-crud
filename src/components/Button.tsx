import styled from "styled-components";

export const Button = ({ children, disabled, className, onClick }) => {
  return (
    <ButtonTag disabled={disabled} className={className} onClick={onClick}>
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

  &.medium {
    width: 5rem;
    border-radius: 16px;
  }

  &.small {
    width: 3rem;
    border-radius: 16px;
  }
`;
