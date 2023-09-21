import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDmjCOt5vv0L66DZD8z-n8rpNwTmkh8nxc",
  authDomain: "banco-ganadero-74dc4.firebaseapp.com",
  projectId: "banco-ganadero-74dc4",
  storageBucket: "banco-ganadero-74dc4.appspot.com",
  messagingSenderId: "781885604708",
  appId: "1:781885604708:web:0b9d9310dedff398a87071",
  measurementId: "G-Y67C1QTXT6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
