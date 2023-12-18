import React from "react";
import Task from "./Task";
function TaskList({tasks, onHandleDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map(task=> <Task key={task.text} task={task} onHandleDeleteTask={onHandleDeleteTask} />)}
    </div>
  );
}

export default TaskList;
