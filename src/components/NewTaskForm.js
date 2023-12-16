import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')
  const categoryExceptAll = categories.filter(category => {
    if(category !== 'All'){
      return true
    }})
  
    const categoryOptions = categoryExceptAll.map(category => {
    return <option key={category}>{category}</option>
  })

function handleTextChange(event){
  setText(event.target.value)
}
function handleCategoryChange(event){
  setCategory(event.target.value)
}
function handleSubmit(e){
  e.preventDefault()
  const newTask ={
    text,
    category
  }
  onTaskFormSubmit(newTask)
}

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange}value={text}type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} value={category} name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
// NewTaskForm
// 1. Pass the list of categories to this component from App. Then, update this component to display <option> elements
//  for each category inside of the <select> element except the "All" category, so that the user can select a category when adding a new task.

// Next, update this form to be a controlled component, so that all form inputs are captured in state.
//create state, create value set to state..

//onsubmit, hadle event, create new object, use onTaskformSubmit to add the new task to the list of tasks. by passing to app,
//spread operator to tasks to add to tasks array..set tasks with new arra?
// When the form is submitted, add a new task to the list with the text and category from the form. For the tests 
// for this feature to pass, you'll need a callback prop named onTaskFormSubmit that takes a task object as an argument.