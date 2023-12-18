import React from "react";

function Task({task, onHandleDeleteTask}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick = {()=> onHandleDeleteTask(task)} className="delete">X</button>
    </div>
  );
}

export default Task;
