import { useState, useEffect} from "react";
import { db } from '../../firebase.js'
import { addTask, getTasks, deleteTask} from '../../firebase.js'

function TaskForm({ user }) {
  const [newTask, setNewTask] = useState(""); // keeps track of new task name
  const [newDesc, setNewDesc] = useState(""); // keeps track of new task description
  const [search, setSearch] = useState(""); // for search

  const [tasks, setTasks] = useState([]);

  //load tasks
  async function interfaceLoad() {
    const data = await getTasks(user.uid);
    setTasks(data);
  }

  //delete tasks
  async function interfaceDelete(id) {
    if(confirm('Are you sure you want to delete?')) {
      deleteTask(id)
      interfaceLoad();
    }
  }

  //Load tasks on load
  useEffect(() => {
  if (!user) return;
  interfaceLoad();
}, [user]);


  let searchWord = search.toLowerCase(); 
  let filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchWord));

  async function handleSubmit() {
    if (newTask !== "") {
      await addTask({ task: newTask, description: newDesc }, user.uid);
      interfaceLoad();//calls load again
    } else {
      alert('You must add a name and description');
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
         <button onClick={() => handleSubmit()}>
        Add Task
        </button>
      <ul>
        {filteredTasks.map((task) => <li>{ task.task }{': '}{task.description}
          <button onClick={() => interfaceDelete(task.id)}>
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