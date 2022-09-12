import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ8ThqkGYvtiJ2VQKy71eGHbwzaiXxC5Q",
  authDomain: "netflix-clone-121a4.firebaseapp.com",
  projectId: "netflix-clone-121a4",
  storageBucket: "netflix-clone-121a4.appspot.com",
  messagingSenderId: "668504628500",
  appId: "1:668504628500:web:fd859a6a4988f1f2c77601",
  measurementId: "G-XGD8PC39WT",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
