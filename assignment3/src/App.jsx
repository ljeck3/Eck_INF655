import { useState, useEffect } from 'react';

import { auth } from '../firebase.js'

import Greeting from './components/Greeting'
import TaskForm from './components/TaskForm'
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

const [user, setUser] = useState(null)
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })
    return unsubscribe
}, [])

  return (
    <div className="App">
      <Logout />
      <Register />
      <Login />
      <Greeting username={user ? user.email : "Guest"} />
      <hr></hr>
      <TaskForm user={user}/>
    </div>
  );
}

export default App;