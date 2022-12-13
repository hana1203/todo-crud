import { signUp } from "./apis/auth";

function App() {
  signUp("hiyo22l@email.com", "11112222");
  return <div className="App">hiTest</div>;
}

export default App;
