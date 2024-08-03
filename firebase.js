// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj_mXuK-NLSJuOWqjaDH9pHFrarfYN8sQ",
  authDomain: "inventory-management-app-9d886.firebaseapp.com",
  projectId: "inventory-management-app-9d886",
  storageBucket: "inventory-management-app-9d886.appspot.com",
  messagingSenderId: "808952719121",
  appId: "1:808952719121:web:a5907a6d00946a93a5ceb0",
  measurementId: "G-2EMDKKGQ2W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
