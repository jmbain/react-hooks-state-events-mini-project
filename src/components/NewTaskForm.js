import React, {useState} from "react";

function NewTaskForm(props) {
  
  const [formData, setFormData] = useState( {
    text: "",
    category: "Code"
  })

  const categoryOptionElements = props.categories.map(category =>
    {if (category !== "All") {
      return <option key={category}>{category} </option>
      }
    }
  )

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]:event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newTask = {
      ...formData
    }
    props.onTaskFormSubmit(newTask)
    console.log(newTask)

  }


  
  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoryOptionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
