import React from "react";

function Task({text, category, deleteTask}) {
  
  function handleClick() {
    console.log("REVISIT DELETE CLICK")
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteTask(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
