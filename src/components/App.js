import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const onHandleSubmit = newData =>{
    setTasks([...tasks, newData]);
  }
  console.log(tasks)

  const onHandleClick = category =>{
    setSelectedCategory(category);
  }
  const filteredTask = tasks.filter(task =>{
    if(task.category === selectedCategory){
      return true} else if(
        selectedCategory === "All")
      {return true}
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onHandleClick={onHandleClick} selectedCategory={selectedCategory} categories={categories}/>
      <NewTaskForm categories={categories} onHandleSubmit={onHandleSubmit}/>
      <TaskList tasks={filteredTask} />
    </div>
  );
}

export default App;
