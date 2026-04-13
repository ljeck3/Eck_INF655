import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';

 
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

export async function getTasks(uid) {
    try {
        const q = query(collection(db, "tasks"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("error retrieving tasks: ", error);
        return [];
    }
}

//Add Task
export async function addTask(task, uid) {
    try {
        const docRef = await addDoc (collection(db, "tasks"), { ...task, uid});
        console.log("Task added to Firebase")
        return {id: docRef.id, ...task, uid}
    }   catch (error) {
        console.error("error adding task:", error);
    }
}

export { db };
export const auth = getAuth(app);
export default app;