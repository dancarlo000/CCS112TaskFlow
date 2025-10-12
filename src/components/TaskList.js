import React from "react";
function TaskList({ tasks, deleteTask }) {
    return (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
            <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.priority}</td>
            <td>
                <button
                className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(index)}
                    >
                        Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    );
}

export default TaskList;