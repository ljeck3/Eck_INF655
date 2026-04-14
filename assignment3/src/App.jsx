import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { auth } from '../firebase.js'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';

import { onAuthStateChanged } from 'firebase/auth';

function App() {

const [loading, setLoading] = useState(true); 
const [user, setUser] = useState(null)
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        setLoading(false);
    })
    return unsubscribe
}, [])

if (loading) return <p>Loading...</p>; //ProtectedRoute was doing checks before Firebase could get user info. This makes it wait. 

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
            <Route path="/login" element={<LoginPage user={user} />} />
            <Route path="/" element={
              <ProtectedRoute user={user}>
                  <Dashboard user={user} />
              </ProtectedRoute>
            } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;