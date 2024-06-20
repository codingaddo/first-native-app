// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhSRAcFEHHk-9dAm_k3PXcwiRsslRsdJU",
  authDomain: "business-directory-c86b9.firebaseapp.com",
  projectId: "business-directory-c86b9",
  storageBucket: "business-directory-c86b9.appspot.com",
  messagingSenderId: "1032519158144",
  appId: "1:1032519158144:web:6a216f0ad573d25ca6d965",
  measurementId: "G-2SM6N58PRG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
