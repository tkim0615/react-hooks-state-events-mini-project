import React, {useState} from "react";

function NewTaskForm({categories, onHandleSubmit}) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('')

  const handleTextChange = (e) =>{
      setText(e.target.value)
  }
  const handleCategorychange = (e) =>{
    setCategory(e.target.value)
 }


  const categoriesNoAll = categories.filter(category =>{
    if(category !== 'All'){
      return true
    }
  })

  const optionELements = categoriesNoAll.map(category => {
  return <option key={Math.random()}>{category}</option>
})


  const handleSubmit = (e) =>{
    e.preventDefault()
    const newTask ={
      text,
      category
    }
    onHandleSubmit(newTask)
  }



  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input value={text}onChange={handleTextChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategorychange} name="category">
          {optionELements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
