import { useState } from "react";

function TaskComponent() {
  const [newTask, setNewTask] = useState(""); // keeps track of new task name
  const [newDesc, setNewDesc] = useState(""); // keeps track of new task description
  const [search, setSearch] = useState(""); // for search

  const [tasks, setTasks] = useState([
    { task: "Take out the trash", description: "Every Tuesday evening" },
    { task: "Do the dishes", description: "After every meal" },
    { task: "Clean the bathroom", description: "Once a week" },
    { task: "Fold laundry", description: "When the dryer is done" },
    { task: "Wash the floor", description: "Every other weekend" },
  ]);

  let searchWord = name.toLowerCase(); 
  let filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchWord));

  return (
    <div>
      <input
            placeholder="Search Tasks"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <br></br>
        <input
            placeholder="Enter Task Name"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
        />
        <input
            placeholder="Enter Task Description"
            value={newDesc}
            onChange={e => setNewDesc(e.target.value)}
        />
        <button onClick={() => alert(`${search}${newTask}${newDesc}`)}>
      Add Task</button>
      <ul>
        {filteredTasks.map((task) => <li>{ task.task }</li>)}
      </ul>
    </div>
  )
}

export default TaskComponent; 