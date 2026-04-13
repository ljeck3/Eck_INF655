import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getTasks() {
    const tasks = [];
    try {const querySnapshot = await getDocs(collection(db, "tasks"))
    querySnapshot.forEach((doc)=>{
        tasks.push({id: doc.id, ...doc.data()})
    })
    } catch(error) {
        console.error("error retrieving task: ", error);
    }
    return tasks; 
}

//Add Task
export async function addTask(task) {
    try {
        const docRef = await addDoc (collection(db, "tasks"), task);
        console.log("Task added to Firebase")
        return {id: docRef.id, ...task}
    }   catch (error) {
        console.error("error adding task:", error);
    }
}

export { db };
export const auth = getAuth(app);
export default app;