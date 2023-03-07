import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK5vvNwZ-LXiywc-dc95Yn6uPpUnH7pGY",
    authDomain: "personal-web-f9069.firebaseapp.com",
    projectId: "personal-web-f9069",
    storageBucket: "personal-web-f9069.appspot.com",
    messagingSenderId: "300817250920",
    appId: "1:300817250920:web:04bf357d5a0886043599dd",
    measurementId: "G-63YFWDDLH2"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

