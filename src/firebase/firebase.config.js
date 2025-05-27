import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeqhy3imNxk50lKrQaxmTkunRXlQR3znQ",
  authDomain: "fir-project-9d6a3.firebaseapp.com",
  projectId: "fir-project-9d6a3",
  storageBucket: "fir-project-9d6a3.appspot.com",
  messagingSenderId: "277355434515",
  appId: "1:277355434515:web:20268707b9e6ae89e7a5e6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
