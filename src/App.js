import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sign } from "./pages/Sign";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
