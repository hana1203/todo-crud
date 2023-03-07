import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Sign } from "./pages/Sign";
import { TodoList } from "./pages/TodoList";
import "./App.css"; //css파일 추가하기

function App() {
  if (process.env.NODE_ENV === "production") {
    console.log = function no_console() {};
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={1500} />
    </div>
  );
}

export default App;
