import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasksState, setTasksState] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const filteredTasks = tasksState.filter(task => {
    if (selectedCategory === "All") {
      return task
    } 
    
    return task.category === selectedCategory;
  })
  
  
  function onTaskFormSubmit(newTask) {
    setTasksState([...tasksState, newTask])
    // console.log(tasksState)
  }
  
  function deleteTask(text) {
    setTasksState((tasksState) => tasksState.filter(task => {
      // console.log(task.text)
      return task.text !== text
    }))
    
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
