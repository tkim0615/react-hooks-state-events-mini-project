import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) =>{
    setSelectedCategory(category);
  }

  const filtered = tasks.filter(task =>{
    if(selectedCategory === 'All') {
      return true}else{
        if(selectedCategory === task.category) {
          return task
      }
}} )
console.log(filtered);

  const onHandleDeleteTask = (deletedTask)=>{
    const filteredTask = tasks.filter(task => {
      if(task.text !== deletedTask.text) {
        return true
    }})
    setTasks(filteredTask)
  }

    const onHandleSubmit = (formData) =>{
      setTasks([...tasks, formData])
    }




  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategoryFilter={handleCategoryFilter}/>
      <NewTaskForm categories={categories} onHandleSubmit={onHandleSubmit} />
      <TaskList onHandleDeleteTask={onHandleDeleteTask} tasks={filtered} />
    </div>
  );
}

export default App;
