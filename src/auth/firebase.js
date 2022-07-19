import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBCS39RLJYE09EU0XwghcsQLjkxVLeuYj4",
  authDomain: "movieappreact-6b07b.firebaseapp.com",
  projectId: "movieappreact-6b07b",
  storageBucket: "movieappreact-6b07b.appspot.com",
  messagingSenderId: "272107674981",
  appId: "1:272107674981:web:3e96e06110ed4f8ae7d58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);