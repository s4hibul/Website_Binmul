import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTr_jSx8bphzniw29s3p9Dg0K7ocz-tZY",
  authDomain: "bina-mulia-54844.firebaseapp.com",
  projectId: "bina-mulia-54844",
  storageBucket: "bina-mulia-54844.appspot.com",
  messagingSenderId: "21080863956",
  appId: "1:21080863956:web:3ba45b839acd72f481f741",
  measurementId: "G-ZPV30F8HT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};

