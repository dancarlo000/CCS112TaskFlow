import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header"; 
import AddTaskView from "./components/AddTaskView"; 
import TaskListView from "./components/TaskListView"; 
 
function App() { 
  return ( 
    <Router> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<TaskListView />} /> 
        <Route path="/add" element={<AddTaskView />} /> 
      </Routes> 
    </Router> 
  ); 
} 
 
export default App; 