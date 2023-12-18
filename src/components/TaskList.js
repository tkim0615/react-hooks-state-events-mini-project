import React,{useState} from "react";
import Task from "./Task";


function TaskList({tasks, onHandleDeleteTask}) {
  

  return (
    <div className="tasks">
      {tasks.map(task=> <Task onHandleDeleteTask={onHandleDeleteTask}key={task.text} task={task}/> )}
    </div>
  );
}

export default TaskList;
