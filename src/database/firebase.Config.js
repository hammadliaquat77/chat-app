import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDY3zwoBy9HfpsugbaS8BJbE4c-wf5BAl4",
    authDomain: "batch-11-3191d.firebaseapp.com",
    projectId: "batch-11-3191d",
    storageBucket: "batch-11-3191d.appspot.com",
    messagingSenderId: "1087219169012",
    appId: "1:1087219169012:web:72ba3ce1cb980446db90a1",
    measurementId: "G-E94VDMSL9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
