import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import toDoListJSON from "./data/toDoList.json";
import { useState } from "react";
// import { useEffect } from "react";

export default function App() {
  const [tasks, setTasks] = useState(toDoListJSON);

  const handleAddTodo = (newTodo) => {
    const newTask = {
      id: tasks.length + 1,
      task: newTodo,
      complete: false,
    };

    setTasks([...tasks, newTask]);
    console.log(newTask);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/add-todo"
            element={<InputPage onAddTodo={handleAddTodo} />}
          />

          {/* The page for not found url path */}
          <Route
            path="*"
            element={
              <h1 className="d-flex flex-row justify-content-center align-items-center vh-100">
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
