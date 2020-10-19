import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDH9O8tqtFJEdH_KxDjosQIKfj4sXal4ck",
  authDomain: "test-f93f3.firebaseapp.com",
  databaseURL: "https://test-f93f3.firebaseio.com",
  projectId: "test-f93f3",
  storageBucket: "test-f93f3.appspot.com",
  messagingSenderId: "677808057836",
  appId: "1:677808057836:web:600434c7246953ffa324c9",
  measurementId: "G-6FSSNDVSR1",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
