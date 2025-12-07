import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw6Iv6TJmV8jR2pjULgv9MIEAuf6eKz-M",
  authDomain: "nandaandlauchie.firebaseapp.com",
  projectId: "nandaandlauchie",
  storageBucket: "nandaandlauchie.firebasestorage.app",
  messagingSenderId: "1011134998676",
  appId: "1:1011134998676:web:ddd71ce3bc61593d0aac81",
};

// Initialize Firebase
const firbaseApp = initializeApp(firebaseConfig);

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
