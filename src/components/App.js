import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });///1. make both data into stateful data 2. pass down Tasks state to TaskList
function App() {
  const[tasks, setTasks] = useState(TASKS)
  const[categories, setCategories] = useState(CATEGORIES) //list of categories string in Array
  const[selectedCategory, setSelectedCategory] = useState('All')

  function handleDelete(deletedTask){//filter tasks so whichever task clicked is filtered out
    const filterDeleted = tasks.filter(task =>{
      if(deletedTask.text !== task.text){
        return true
      }
    })
    setTasks(filterDeleted)
  }

  function onHandleClick(category){
      setSelectedCategory(category)
  }
  const filtered = tasks.filter(task =>{
    if(selectedCategory === 'All'){
      return true;
  }else if (selectedCategory === task.category){
    return true
  }
})

function onTaskFormSubmit(newTask){
  setTasks([...tasks, newTask])
}



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={categories} onHandleClick={onHandleClick} selectedCategory={selectedCategory} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={categories}/>
      <TaskList tasks={filtered} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
