import React from "react";

function Task({task, handleDelete}) {   //receive task object fromTaskList as prop
  
  function handleClick(){
    handleDelete(task)
  }
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
//Deliverable 2. Task
// Update the Task component 
// so that it shows the task's text and category.

// When the delete button is clicked,
//  the task should be removed from the list.
//pseudocode 
// 1. attach onCLick to deletebutton.
//2. update the state to remove the task from the list.
//3. tasks state is defined in App component. pass down
//call back function from App to TaskList to Task to be invoked by button click handler
//4. inside, app component, write a function to update tasks state