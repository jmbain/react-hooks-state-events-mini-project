import React, {useState} from "react";

function CategoryFilter({categories, setSelectedCategory, selectedCategory}) {

  function handleClick(event) {
    // setIsSelected("")
    // event.target.className="selected"
    setSelectedCategory(event.target.value)
    console.log(selectedCategory)
    // console.log(isSelected)
  }



  const categoryButtonElements = categories.map(category => {
    return <button 
              key={category} 
              className={selectedCategory===category? "selected" : ""} 
              onClick={handleClick}
              value={category}>
            {category}
            </button> 
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtonElements}
    </div>
  );
}

export default CategoryFilter;
