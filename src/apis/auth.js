import axios from "axios";
import { instance } from "./config";

export const signUp = async (email, password) => {
  await instance
    .post("/auth/signup", {
      email: email,
      password: password,
    })
    .then((res) => {
      // localStorage.setItem("accessToken", res.data.access_token);
      console.log(res);
      console.log("회원가입시 토큰", res.data.access_token);
      if (res.status === 201) {
        alert(`회원가입이 완료되었어요.\n반가워요 ${email}님`);
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err);
    });
};

export const logIn = async (email, password) => {
  await instance
    .post("/auth/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.access_token);
      console.log("로그인시 토큰", res.data.access_token);
      alert(`${email}님 로그인 성공이에요`);
    })
    .catch((err) => console.log(err));
};
