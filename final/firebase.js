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
export async function getGames(userId) {
    try {
        const q = query(collection(db, "games"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("error retrieving games: ", error);
        return [];
    }
}

//Add Helper
export async function addGame(game, userId, createdAt) {
    try {
        const docRef = await addDoc (collection(db, "games"), { ...game, userId, createdAt});
        console.log("Game added to Firebase")
        return {id: docRef.id, ...game, userId, createdAt}
    }   catch (error) {
        console.error("error adding game:", error);
    }
}

//Delete Helper
export async function deleteGame(id) {
    try {
        await deleteDoc(doc(db, "games", id));
        console.log("Deleted game from Firebase");
    } catch (error) {
        console.error("error deleting game: ", error);
    }
}

//Update Helper
export async function updateGame(id, updateData){
    try {
        const gameRef = doc(db, "games", id) 
        await updateDoc(gameRef, updateData)
        console.log("Game updated!");
    }catch (error) {
        console.error("error updatating game: ", error);
    }
}

export { db };
export const auth = getAuth(app);
export default app;