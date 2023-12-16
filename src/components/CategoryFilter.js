import React from "react";
//receiveing categories stateful data(array) as prop from App.
function CategoryFilter({categories}) {
   const buttonElements = categories.map(category =>{
    return <button key={Math.random()}>{category}</button>
   })                                                 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}
export default CategoryFilter;    //psuedo. 1. pass down categories state from App. to CategoryFilter component. 2. map array to create buttons. set key as category
// Deliverbale #3. CategoryFilter


// When a button is clicked, the following should happen:
//1. create a function to set categories state in APp.js when butotn is clicked. filter list of categories and set state
// so that only category selected displasy

// Whichever button was clicked should have a class of selected. The other 
// buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.
