import React, {useState} from "react";
//1. state for category drop down and text input
// set values of inputs with state with onChange event
//create submit event and create newData to send up to App.js(send down callback
//function that will send data up
function NewTaskForm({categories, onHandleSubmit}) {
  const[formData, setFormData] = useState({
    text: '',
    category: ''
  })
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    const newTask ={
      text: formData.text,
      category: formData.category
    }
    onHandleSubmit(newTask)
  }



  const newArray = categories.filter(category =>{
    return category!== 'All'
  })
  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input value={formData.text}onChange={handleChange}type="text" name="text" />
      </label>
      <label>
        Category
        <select value={formData.category}onChange={handleChange} name="category">
          {newArray.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
