import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBbFNTjA3q4FdpkHIO30EeQf_dwbfIdNbA",
    authDomain: "ecommerce-2f885.firebaseapp.com",
    projectId: "ecommerce-2f885",
    storageBucket: "ecommerce-2f885.appspot.com",
    messagingSenderId: "397772890641",
    appId: "1:397772890641:web:0110fd006984a41d7d87b0"
  };
  
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  export {auth, app} ;