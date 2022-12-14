import axios from "axios";
import { instance } from "./config";

export const signUp = async (email, password) => {
  await instance
    .post("/auth/signup", {
      email: email,
      password: password,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
