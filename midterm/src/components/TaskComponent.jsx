import { useState } from "react";

const tasks = [
    {id: 1001, task: "Take out the trash"},
    {id: 1002, task: "Do the dishes"},
    {id: 1003, task: "Clean the bathroom"},
    {id: 1004, task: "Fold laundry"},
    {id: 1005, task: "Wash the floor"},
  ];

function TaskComponent() {
    const [name, setName] = useState("");

    function submitName(){
        alert(`idk but here is what you typed: ${name}`)
    }
  return (
    <div>
         <input
            placeholder="Enter Task Name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <button onClick={submitName}>Search Tasks</button>
        <ul>
            {tasks.map((task) => <li key={task.id}>{ task.task }</li>)}
        </ul>
        <button>Sort by Name</button>
    </div>
  );
}

export default TaskComponent;