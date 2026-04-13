import { useState } from "react";
import { db } from '../../firebase.js'
import { addTask, getTasks } from '../../firebase.js'

function TaskForm({ user }) {
  const [newTask, setNewTask] = useState(""); // keeps track of new task name
  const [newDesc, setNewDesc] = useState(""); // keeps track of new task description
  const [search, setSearch] = useState(""); // for search

  const [tasks, setTasks] = useState([]);



  let searchWord = search.toLowerCase(); 
  let filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchWord));

  function handleSubmit() {
    if (newTask !== "") {
    setTasks(prev => [...prev, { task: newTask, description: newDesc }]);
    } else {
      alert('You must add a name and a description.')
    }
  }

  //This should've been passed as a prop :(
  function deleteTask(task) {
    if(confirm('Are you sure you want to delete?')) {
      setTasks(prev => prev.filter(t => t.task !== task));
    }
  }

  function sortTasks() {
      setTasks(prev => [...prev].sort((a, b) => a.task.localeCompare(b.task)));
    }

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
        {/* <button onClick={() => alert(`${search}${newTask}${newDesc}`)}>
        Test for Data
        </button> */}
         <button onClick={() => handleSubmit()}>
        Add Task
        </button>
      <ul>
        {filteredTasks.map((task) => <li>{ task.task }{': '}{task.description}
          <button onClick={() => deleteTask(task.task, task.description)}>
            Delete
        </button></li>)}
        <button onClick={() => sortTasks()}>
          Sort by Name
        </button>
      </ul>
    </div>
  )
}

export default TaskForm; 