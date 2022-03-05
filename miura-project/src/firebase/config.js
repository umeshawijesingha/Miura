
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCl6FlceVelw9P30lLsrRZ5T4A149_UCj4",
  authDomain: "projectmiura-ff9d2.firebaseapp.com",
  projectId: "projectmiura-ff9d2",
  storageBucket: "projectmiura-ff9d2.appspot.com",
  messagingSenderId: "952632390397",
  appId: "1:952632390397:web:76801f79ec05d77ad54494",
  measurementId: "G-65GZLNSENJ"
};

// Initialize Firebase

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);