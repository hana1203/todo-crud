import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sign } from "./pages/Sign";
import { TodoList } from "./pages/TodoList";

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
    </div>
  );
}

export default App;
