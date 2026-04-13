import { useState, useEffect } from 'react';
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'
import Register from './components/Register';

function App() {
const name1 = "Marquis Nordyke"
const name2 = "Chris P. Bacon"

const [user, setUser] = useState(null)


function handleAlert() {
    alert("This is an alert");
  }

  return (
    <div className="App">
      <Register />
      <Greeting username={name1} />
      <hr></hr>
      <UserInfo handleClick={handleAlert} />
      <hr></hr>
      <TaskForm />
    </div>
  );
}

export default App;