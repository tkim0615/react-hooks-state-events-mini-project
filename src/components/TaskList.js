import React,{useState} from "react";
import Task from "./Task";

//1. accept state variable tasks array and map them to create Task Componet. have key prop!
function TaskList({tasks, onHandleDeleteClick}) {

  const tasksList = tasks.map(task =>{
    return <Task key={task.text} text={task.text} category={task.category} onHandleDeleteClick={onHandleDeleteClick} />
  })


  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
