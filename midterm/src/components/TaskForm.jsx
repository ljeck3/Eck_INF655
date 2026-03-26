import { useState } from "react";

function TaskForm() {
    const [name, setName] = useState("");

    function submitName(){
        console.log(`You entered the name: ${name}`)
    }
  return (
    <div>
        <input
            placeholder="Enter Task Name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <br></br>
        <button onClick={submitName}>Add Task</button>
    </div>
  );
}

export default TaskForm;