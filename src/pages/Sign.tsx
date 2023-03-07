import { useEffect, useState } from "react";
import styled from "styled-components";
import { logIn, signUp } from "../apis/auth";
import {
  checkEmailValidation,
  checkPasswordValidation,
} from "../utils/validation";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  const setEmailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!checkEmailValidation(value)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
    setEmail(value);
  };

  const setPasswordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!checkPasswordValidation(value)) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }
    setPassword(value);
  };

  const submitSign = (e: React.FormEvent<HTMLFormElement>) => {
    // const submitSign = (e: React.SyntheticEvent) => { //both works well
    e.preventDefault();
    if (!isLoginPage) {
      signUp({ email, password });
    } else if (isLoginPage) {
      logIn({ email, password }).then(() => navigate("/todo"));
    }
    setEmail("");
    setPassword("");
  };

  const handleClickToOther = () => {
    if (isLoginPage) {
      setIsLoginPage(false);
    } else {
      setIsLoginPage(true);
    }
    setEmail("");
    setPassword("");
    setIsEmailError(false);
    setIsPasswordError(false);
  };

  // console.log("email", email);

  //토큰 있는 상태로 로그인 페이지 접속시 투두페이지로 가기
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/todo");
    }
  }, []);

  return (
    <SignWrapper>
      <SignForm onSubmit={submitSign}>
        {isLoginPage ? <h3>로그인</h3> : <h3>회원가입</h3>}
        <SpanInputWrapper>
          <label>이메일</label>

          <Input
            placeholder={"이메일은 @ 를 포함해요"}
            type={"text"}
            value={email}
            onChange={setEmailValidation}
            isError={isEmailError}
            errMsg="올바른 이메일 형식을 입력하세요"
            className="big"
          ></Input>
        </SpanInputWrapper>
        <SpanInputWrapper>
          <label>비밀번호</label>
          <Input
            placeholder={"8자 이상 비밀번호를 입력하세요"}
            type={"password"}
            value={password}
            onChange={setPasswordValidation}
            isError={isPasswordError}
            errMsg="8자 이상 비밀번호를 입력하세요"
            className="big"
          ></Input>
        </SpanInputWrapper>
        <Button
          className="large"
          disabled={
            isEmailError ||
            isPasswordError ||
            email.length === 0 ||
            password.length === 0
          }
        >
          {isLoginPage ? "로그인" : "회원가입"}
        </Button>
      </SignForm>
      <Tab>
        {isLoginPage ? (
          <div onClick={handleClickToOther}>회원가입 하러 가기</div>
        ) : (
          <div onClick={handleClickToOther}>로그인 하러 가기</div>
        )}
      </Tab>
    </SignWrapper>
  );
};

const SignWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  background-color: white;
  width: 24rem;
  height: fit-content;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
`;

const Tab = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: flex-end;
  > div {
    cursor: pointer;
    padding-right: 2rem;
    color: rgb(118, 118, 246);
    :hover {
      color: rgb(80, 80, 185);
    }
  }
`;

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    margin: 16px 0;
  }

  > button {
    margin: 16px 0;
  }
`;

const SpanInputWrapper = styled.div`
  padding: 16px;
`;
