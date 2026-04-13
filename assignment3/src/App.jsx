import { useState, useEffect } from 'react';

import { auth } from '../firebase.js'

import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm'
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
const name1 = "Marquis Nordyke"
const name2 = "Chris P. Bacon"

const [user, setUser] = useState(null)
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    return unsubscribe
}, [])

function handleAlert() {
    alert("This is an alert");
  }

  return (
    <div className="App">
      <Logout />
      <Register />
      <Login />
      <Greeting username={user ? user.email : "Guest"} />
      <hr></hr>
      <UserInfo handleClick={handleAlert} />
      <hr></hr>
      <TaskForm />
    </div>
  );
}

export default App;