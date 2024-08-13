import React from "react";

import Task from "./Task"

function TaskList({tasks, deleteTask}) {

  const taskComponents = tasks.map(task => {
    // console.log(task.category)
    return <Task key={task.text} text={task.text} category={task.category} deleteTask ={deleteTask} />
  })
  
  return (
    <div className="tasks">
      <ul className="task-list">{taskComponents}</ul>
    </div>
  );
}

export default TaskList;
