import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const onHandleDeleteTask = (deletedTask) =>{
    setTasks(tasks.filter(task =>{
      return task.text !== deletedTask.text;
    }))
  }
  const onHandleCategory =(category) =>{
    setSelectedCategory(category)
  }
  const filteredList = tasks.filter(task =>{
    if(selectedCategory === 'All'){
      return true} else{
        return task.category === selectedCategory
      }
  })

 const onHandleSubmit = (newTask) =>{
  setTasks([...tasks, newTask])
 }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategogory={selectedCategory} categories={categories} onHandleCategory={onHandleCategory}/>
      <NewTaskForm categories={categories} onHandleSubmit={onHandleSubmit}/>
      <TaskList tasks={filteredList} onHandleDeleteTask={onHandleDeleteTask}  />
    </div>
  );
}

export default App;
