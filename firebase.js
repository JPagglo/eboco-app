
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import  {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCnc0YnLsjbaazt6rTipVi-AhZpwPohNWQ",
  authDomain: "aplication-testx.firebaseapp.com",
  projectId: "aplication-testx",
  storageBucket: "aplication-testx.appspot.com",
  messagingSenderId: "946287895072",
  appId: "1:946287895072:web:3613473183cd1ba24d9245"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore();

export {auth, db};
