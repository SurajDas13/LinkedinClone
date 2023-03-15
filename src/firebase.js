import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdEzbhDu0_uuihoetVMX1WswTUyHnGVBc",
    authDomain: "linkedin-clone-d25c2.firebaseapp.com",
    projectId: "linkedin-clone-d25c2",
    storageBucket: "linkedin-clone-d25c2.appspot.com",
    messagingSenderId: "606652342430",
    appId: "1:606652342430:web:6737d76ad1eb7ae8b9db8f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  

  export {db , auth};