import { useState, useEffect} from "react";
import { db, addTask, getTasks, deleteTask, updateTask} from '../../firebase.js'

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

    //delete tasks
  async function interfaceUpdate(id) {
    const revisedTask = window.prompt("Edit Task Name","");
    const revisedDesc = window.prompt("Edit Task Description","");
    updateTask( id, { task: revisedTask, description: revisedDesc });
    interfaceLoad();
    
  }

  //Load tasks on load
  useEffect(() => {
  if (!user) return;
  interfaceLoad();
}, [user]);


  let searchWord = search.toLowerCase(); 
  let filteredTasks = tasks.filter(task => task.task.toLowerCase().includes(searchWord));

  async function handleSubmit() {
    const date = new Date();
    if (newTask !== "") {
      await addTask({ task: newTask, description: newDesc }, user.uid, date.toDateString());
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
      <h4>View Tasks</h4>
      <ul>
        {filteredTasks.map((task) => <li>{ task.task }{': '}{task.description}
          <button onClick={() => interfaceUpdate(task.id)}>
            Edit
          </button>
          <button onClick={() => interfaceDelete(task.id)}>
            Delete
          </button>
          </li>)}
       {/*  <button onClick={() => sortTasks()}>
          Sort by Name
        </button> */}
      </ul>
      <h4>Add A New Task</h4>
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
      <input
          placeholder="Search Tasks"
          value={search}
          onChange={e => setSearch(e.target.value)}
      />
      <br></br>
    </div>
  )
}

export default TaskForm; 