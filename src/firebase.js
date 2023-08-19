import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4wjG8nVsERP6A6R__kl_cuKbowYoo3G8",
  authDomain: "tour-and-travel-authentication.firebaseapp.com",
  projectId: "tour-and-travel-authentication",
  storageBucket: "tour-and-travel-authentication.appspot.com",
  messagingSenderId: "48848038505",
  appId: "1:48848038505:web:95ac01efa715d94d2d90f8",
  measurementId: "G-MSJGF1PYK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
