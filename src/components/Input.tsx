import styled from "styled-components";

interface Props {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
  errMsg?: string;
  className?: string;
}
export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  isError,
  errMsg,
  className,
}: Props) => {
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
    width: 14rem;
    height: 2rem;
    padding: 16px;
    margin-top: 10px;
    margin-bottom: 10px;

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
