import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const onHandleClick = (category)=>{  //setting state when user clicks differrent category button
        setSelectedCategory(category)
  }
  const filteredByTaskArray = tasks.filter(task =>{ //using the state we created for category button chosen status, we filter
    if(selectedCategory === 'All'){                   //tasks state which is the array being used to render tasks
      return true}
  
      else{
        if(task.category === selectedCategory){
      return true}
      }
    })


  const onHandleDeleteClick = (text) =>{
    const deleteFilter = tasks.filter(task =>{
      if(task.text !== text){
        return true}
    })
    setTasks(deleteFilter)
  }


  const onHandleSubmit = (newTask) =>{
    setTasks([...tasks, newTask])
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} categories={categories} onHandleClick={onHandleClick}/>
      <NewTaskForm categories={categories} onHandleSubmit={onHandleSubmit} />
      <TaskList onHandleDeleteClick={onHandleDeleteClick} tasks={filteredByTaskArray}/>
    </div>
  );
}

export default App;
