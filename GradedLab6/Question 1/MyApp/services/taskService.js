import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const tasksCollection = collection(db, "tasks");

export const addTask = async (task) => {
  try {
    const docRef = await addDoc(tasksCollection, task);
    console.log("Task added with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const querySnapshot = await getDocs(tasksCollection);
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
  } catch (error) {
    console.error("Error getting tasks: ", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await deleteDoc(doc(db, "tasks", id));
    console.log("Task deleted with ID:", id);
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};
