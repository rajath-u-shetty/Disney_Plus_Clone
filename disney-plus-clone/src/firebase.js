import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf7nqOLZ9905h3hE1qcsIa5Nq6gBUJBJ0",
  authDomain: "disney-plus-clone-b9072.firebaseapp.com",
  projectId: "disney-plus-clone-b9072",
  storageBucket: "disney-plus-clone-b9072.appspot.com",
  messagingSenderId: "139559794405",
  appId: "1:139559794405:web:d0f4b307407779689e460c",
  measurementId: "G-12VWB8TZD9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage};
export default db;
