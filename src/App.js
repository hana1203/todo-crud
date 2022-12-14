import { useState } from "react";
import { signUp } from "./apis/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  signUp("heyiisf@email.com", "hihi1111");
  return <div className="App">hi</div>;
}

export default App;
