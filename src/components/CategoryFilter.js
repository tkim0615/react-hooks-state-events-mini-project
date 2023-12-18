import React from "react";

function CategoryFilter({categories, selectedCategory, onHandleCategory}) {
  const handleClick =(category) =>{
    onHandleCategory(category)
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button onClick={()=>handleClick(category)} key={category}>{category}</button> )/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
