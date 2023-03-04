import { ReactNode } from "react";
import styled from "styled-components";
interface Props {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: () => void;
}
export const Button = ({ children, disabled, className, onClick }: Props) => {
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
  &.large {
    height: 2.2rem;
    border-radius: 32px;
    font-size: medium;
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
