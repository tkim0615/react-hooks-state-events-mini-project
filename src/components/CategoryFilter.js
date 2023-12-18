import React from "react";

function CategoryFilter({categories, handleCategoryFilter, selectedCategory}) {

 const handleClick = (category) => {
  handleCategoryFilter(category);
 }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button className={selectedCategory===category? 'selected':''} onClick={()=>handleClick(category)} key={category}> {category} </button>)}
    </div>
  );
}

export default CategoryFilter;
