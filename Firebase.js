// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPmb3LxhCtmeTHvpnUYFJKJ_QxcnlV9OE",
  authDomain: "atividade-react-native-4c068.firebaseapp.com",
  projectId: "atividade-react-native-4c068",
  storageBucket: "atividade-react-native-4c068.appspot.com",
  messagingSenderId: "432241824595",
  appId: "1:432241824595:web:a557bff63e8a2ef992c7a6",
  measurementId: "G-YHGNW73B34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);