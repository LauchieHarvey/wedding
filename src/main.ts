import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw6Iv6TJmV8jR2pjULgv9MIEAuf6eKz-M",
  authDomain: "nandaandlauchie.firebaseapp.com",
  projectId: "nandaandlauchie",
  storageBucket: "nandaandlauchie.firebasestorage.app",
  messagingSenderId: "1011134998676",
  appId: "1:1011134998676:web:ddd71ce3bc61593d0aac81",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
