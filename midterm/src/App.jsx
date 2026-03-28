import { useState } from 'react';
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'
import TaskComponent from './components/TaskComponent';

function App() {
const name1 = "Marquis Nordyke"
const name2 = "Chris P. Bacon"

function handleAlert() {
    alert("This is an alert");
  }

  return (
    <div className="App">
      <Greeting username={name1} />
      <hr></hr>
      <UserInfo handleClick={handleAlert} />
      <hr></hr>
      <TaskComponent />
      <hr></hr>
      <TaskForm />
    </div>
  );
}

export default App;