import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX7Ix6K8QjNhMYgARO44CFfp_0nRVrUi8",
  authDomain: "cloud5-e0858.firebaseapp.com",
  projectId: "cloud5-e0858",
  storageBucket: "cloud5-e0858.appspot.com",
  messagingSenderId: "522349307063",
  appId: "1:522349307063:web:061d2eacce889f419dd932",
  measurementId: "G-9ZHKP17W96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);