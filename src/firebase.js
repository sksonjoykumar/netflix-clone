import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyC78OeZroG6_RDuo5MdX2yMCGTKa3pWgY4",
  authDomain: "netflix-69474.firebaseapp.com",
  projectId: "netflix-69474",
  storageBucket: "netflix-69474.firebasestorage.app",
  messagingSenderId: "1055822873686",
  appId: "1:1055822873686:web:4b3e3bef002c3b19f367f7",
  measurementId: "G-4CF6C0DMM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.message);
    toast.error(`${error.message}`);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    toast.error(`${error.message}`);
  }
};

const logOut = () => {
  signOut(auth)
    .then(() => toast.success("Sign out successfully!"))
    .catch((error) => toast.error(error.message));
};

export { auth, db, signUp, login, logOut };
