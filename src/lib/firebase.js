// lib/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDg_zS5sRvuusXaD7vrQbZspFSKke4XmhY",
    authDomain: "mystore-aab4a.firebaseapp.com",
    projectId: "mystore-aab4a",
    storageBucket: "mystore-aab4a.appspot.com",
    messagingSenderId: "411680377304",
    appId: "1:411680377304:web:e692f7f2c1b235c4604aad",
    measurementId: "G-C6L0LW4P78"
};

const app = initializeApp(firebaseConfig);

export default app;
