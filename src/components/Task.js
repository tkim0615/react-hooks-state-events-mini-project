import React from "react";

function Task({task}) {
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;

// Update the `Task` component so that it shows the task's text and category.

// _When the delete button is clicked_, the task should be removed from the list.