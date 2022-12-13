import axios from "axios";
import { instance } from "./config";

export const signUp = async (email, password) => {
  await axios
    .post("https://pre-onboarding-selection-task.shop/auth/signup", {
      email,
      password,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
