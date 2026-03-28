import { useState } from "react";

function TaskComponent() {
  const [name, setName] = useState("");

  const tasks = [
    {task: "Take out the trash"},
    {task: "Do the dishes"},
    {task: "Clean the bathroom"},
    {task: "Fold laundry"},
    {task: "Wash the floor"},
  ];

  let searchWord = name.toLowerCase(); 
  let filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchWord));

  return (
    <div>
      <input
            placeholder="Enter Task Name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
      <ul>
        {filteredTasks.map((task) => <li>{ task.task }</li>)}
      </ul>
      <button onClick={() => alert(':(')}>
      Sort by Name</button>
    </div>
  )
}

export default TaskComponent; 