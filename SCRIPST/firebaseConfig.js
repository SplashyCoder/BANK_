import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmjCOt5vv0L66DZD8z-n8rpNwTmkh8nxc",
  authDomain: "banco-ganadero-74dc4.firebaseapp.com",
  projectId: "banco-ganadero-74dc4",
  storageBucket: "banco-ganadero-74dc4.appspot.com",
  messagingSenderId: "781885604708",
  appId: "1:781885604708:web:0b9d9310dedff398a87071",
  measurementId: "G-Y67C1QTXT6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);