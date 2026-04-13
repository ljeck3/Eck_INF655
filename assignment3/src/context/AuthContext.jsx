import React, { createContext, useContext, useState } from 'react';
import { auth } from '../../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
 
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 
  const logout = () => {
    return signOut(auth);
  };
 
  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
 
export const useAuth = () => {
  return useContext(UserContext);
};