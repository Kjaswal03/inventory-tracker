import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
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
let app;
let analytics;
let firestore;

if (typeof window !== "undefined") {
  if (!getApps().length) {
    // Only initialize Firebase if no app is initialized yet
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp(); // If already initialized, use that one
  }
  analytics = getAnalytics(app);
  firestore = getFirestore(app);
}

export { app, analytics, firestore };
