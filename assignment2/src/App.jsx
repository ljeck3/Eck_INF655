import { useState } from 'react';
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'

function App() {
  const name1 = "Marquis Nordyke"
  const name2 = "Chris P. Bacon"

  {/*This array is used for both assignement 1 and 2*/}
  const tasks = [
    "Take out the trash",
    "Do the dishes",
    "Clean the bathroom",
    "Fold laundry",
    "Wash the floor",
  ];
  
  const [result, setResult] = useState("");
  function getRandomTask() {
    const random = Math.floor(Math.random() * tasks.length);
    console.log(random);
    const randomTask = tasks[random];
    setResult(randomTask);
  }

  //Assignment 2 - Task 3
  const tasks2 = [
    {id: 1001, task: "Take out the trash"},
    {id: 1002, task: "Do the dishes"},
    {id: 1003, task: "Clean the bathroom"},
    {id: 1004, task: "Fold laundry"},
    {id: 1005, task: "Wash the floor"},
  ];

  function handleAlert() {
    alert("This is an alert");
  }

  return (
    <div className="App">
      <Greeting username={name1} /> {/*Assignment 2 - Task 1 */}
      <Greeting username={name2} /> 
      <hr></hr>

      <UserInfo handleClick={handleAlert} /> {/*Assignment 2 - Task 4 */}
      <hr></hr>

      <button onClick={getRandomTask}>
        Get Random Task
      </button>
      <h3>{result}</h3>
      <hr></hr>

   
      <Counter /> {/*Assignment 2 - Task 2 */}
      <h2>Tasks</h2>
      <ul>
        {tasks2.map((task) => <li key={task.id}>{ task.task }</li>)}
      </ul>
      <TaskForm /> {/*Assignment 2 - Task 5 */}
    </div>
    
  );
}

export default App;