// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhxBjQEgsdpDXXR4BJXMDcyR2iCfwQTQc",
    authDomain: "cards-3ce4d.firebaseapp.com",
    projectId: "cards-3ce4d",
    storageBucket: "cards-3ce4d.appspot.com",
    messagingSenderId: "916903060964",
    appId: "1:916903060964:web:dd43a6068ce5a4c6efd3f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;