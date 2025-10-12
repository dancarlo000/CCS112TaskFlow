import React from "react";
import TaskList from "./TaskList";

function TaskListView({ tasks, deleteTask }) {
    return (
    <div className="container mt-4">
        <h3>Task List</h3>
        {tasks.length === 0 ? (
            <p>No tasks available.</p>
        ) : (
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        )}
      </div>
   );
}

export default TaskListView;