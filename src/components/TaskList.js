import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const taskLists = tasks.map(task =>{
    return <Task key={task.text} task={task} />
  })

  return (
    <div className="tasks">
      {taskLists}
    </div>
  );
}

export default TaskList;
// ### TaskList

// First, we'll want to display all the tasks in our app. Pass down the task data
// from `App` to `TaskList`, and display each task using the `Task` component. Make
// sure to use a `key` prop!
