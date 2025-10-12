import React, { useState } from "react"; import { useNavigate } from "react-router-dom"; 
 
function AddTaskView({ addTask }) {   const [title, setTitle] = useState("");   const [description, setDescription] = useState("");   const [priority, setPriority] = useState("Low");   const navigate = useNavigate(); 
 
  const handleSubmit = (e) => {     e.preventDefault();     addTask({ title, description, priority });     navigate("/"); 
  }; 
 
  return ( 
    <div className="container mt-4"> 
      <h3>Add New Task</h3> 
      <form onSubmit={handleSubmit}> 
        <input           type="text"           placeholder="Title"           className="form-control mb-2"           value={title}           onChange={(e) => setTitle(e.target.value)}           required         /> 
        <textarea           placeholder="Description"           className="form-control mb-2"           value={description}           onChange={(e) => setDescription(e.target.value)} 
        /> 
        <select           className="form-select mb-3"           value={priority}           onChange={(e) => setPriority(e.target.value)} 
        > 
          <option>Low</option> 
          <option>Medium</option> 
          <option>High</option> 
        </select> 
        <button type="submit" className="btn btn-success w-100"> 
          Add Task 
        </button> 
      </form> 
    </div> 
  ); 
} 
 
export default AddTaskView; 
