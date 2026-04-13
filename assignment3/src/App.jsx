import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from '../firebase.js'
import Home from './pages/Home'


//import Greeting from './components/Greeting'
//import TaskForm from './components/TaskForm'
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
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;