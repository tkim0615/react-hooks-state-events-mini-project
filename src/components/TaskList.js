import React from "react";
import Task from "./Task";

//
function TaskList({tasks, handleDelete}) {
  console.log(tasks);//array of task objects paased down as prop (it's a stateful data from)

  const taskComponent = tasks.map(task =>{     //pass down task object to Task Component which will display text, category and deletebutton.
    return <Task key={task} task={task} handleDelete={handleDelete} />
  })
  return (
    <div className="tasks">
      {taskComponent}
    </div>
  );
}

export default TaskList;
// Deliverable 1. TaskList
// First, we'll want to display all the tasks in our app. 
// Pass down the task data from App to TaskList, and display each task using the Task component. Make sure to use a key prop!