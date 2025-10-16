import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddTaskView from "./components/AddTaskView";
import TaskListView from "./components/TaskListView";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/add" element={<AddTaskView addTask={addTask} />} />
      </Routes>
    </Router>
  );
}
//Junver
export default App;