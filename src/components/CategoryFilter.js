import React from "react";

function CategoryFilter({selectedCategory, categories, onHandleClick}) {
 

  const categoryButton = categories.map(category => {  //make sure category for ternary is not a string
    return <button className={selectedCategory === category? 'selected': ''}  onClick={()=>onHandleClick(category)} key={category}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
