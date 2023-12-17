import React,{useState} from "react";
//set state of category, with onChange both on category select and input!
// make formData state. use helper funciton to set state..
//create submit handler. include callback function from App which will be passed down
//in App.js make a onHandleSubmit funciton that takes new data to spread onto tasks state
//create newData object in submit helper function
function NewTaskForm({categories, onHandleSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: ""
  })
  console.log(formData)
  const handleChange = event =>{
    console.log(event.target.name)
    const { name, value } = event.target;
    

    setFormData({...formData, [name]: value});
  }
  const handleSubmit = e =>{
    e.preventDefault();
    const newData = {
      text: formData.text,
      category: formData.category
    }
    onHandleSubmit(newData);
  }




  const categoryExceptAll = categories.filter(category =>{
  return category !== 'All'
})

  const optionElements = [
  <option >Select</option>,

  categoryExceptAll.map(category =>{
  return <option key={Math.random()}>{category}</option>
})
  ]


  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input value={formData.name}onChange={handleChange}type="text" name="text" />
      </label>
      <label>
        Category
        <select value={formData.category} onChange={handleChange} name="category">
          
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
// ### NewTaskForm

// Pass the list of categories to this component from `App`. Then, update this
// component to display `<option>` elements for each category inside of the
// `<select>` element **except** the "All" category, so that the user can select a
// category when adding a new task.

// Next, update this form to be a _controlled component_, so that all form inputs
// are captured in state.

// _When the form is submitted_, add a new task to the list with the text and
// category from the form. For the tests for this feature to pass, you'll need a
// callback prop named `onTaskFormSubmit` that takes a task object as an argument.

