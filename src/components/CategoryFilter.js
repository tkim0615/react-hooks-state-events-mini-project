import React,{useState} from "react";

function CategoryFilter({categories,selectedCategory, onHandleClick}) {
  
  const handleClick = category =>{
    onHandleClick(category);
  }

  const buttonElements = categories.map(category =>{
    return <button className={selectedCategory===category? 'selected':''}  onClick={()=>handleClick(category)} value={selectedCategory} key={category}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;

// ### CategoryFilter
 

// _When a button is clicked_, the following should happen:

// - Whichever button was clicked should have a class of `selected`. The other
//   buttons should not have any class assigned.
// - The list of tasks being displayed should be filtered, so that only tasks that
//   match the category that was clicked are displayed.
// - If the button for "All" is selected, all the tasks should be displayed.