import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, updateDoc, doc, query, where } from 'firebase/firestore';

 
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

//Get Helper
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

//Add Helper
export async function addTask(task, uid, createdAt) {
    try {
        const docRef = await addDoc (collection(db, "tasks"), { ...task, uid, createdAt});
        console.log("Task added to Firebase")
        return {id: docRef.id, ...task, uid, createdAt}
    }   catch (error) {
        console.error("error adding task:", error);
    }
}

//Delete Helper
export async function deleteTask(id) {
    try {
        await deleteDoc(doc(db, "tasks", id));
        console.log("Deleted task from Firebase");
    } catch (error) {
        console.error("error deleting task: ", error);
    }
}

//Update Helper
export async function updateTask(id, updateData){
    try {
        const taskRef = doc(db, "tasks", id) 
        await updateDoc(taskRef, updateData)
        console.log("Task updated!");
    }catch (error) {
        console.error("error updatating RSVP: ", error);
    }
}


export { db };
export const auth = getAuth(app);
export default app;