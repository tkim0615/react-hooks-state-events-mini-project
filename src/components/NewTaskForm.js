import React,{useState} from "react";

function NewTaskForm({categories, onHandleSubmit}) {
  const initForm = {
    text: '',
    category: ''
  }
  const noAll = categories.slice(1,5)
  const [formData, setFormData] = useState(initForm)

  const handleChange = (e) =>{
      setFormData({...formData,[e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmit(formData)
    setFormData(initForm)
  }


  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} value={formData.text} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} value={formData.category} name="category">
          <option value="" selected disabled>Select an option</option>
          {noAll.map(category=> <option value={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
