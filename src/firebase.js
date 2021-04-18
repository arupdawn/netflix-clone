import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyClXD7sw1uC6c5FKqI2H_YJtRwboKhcU_g",
  authDomain: "netflix-clone-571b6.firebaseapp.com",
  projectId: "netflix-clone-571b6",
  storageBucket: "netflix-clone-571b6.appspot.com",
  messagingSenderId: "783411136192",
  appId: "1:783411136192:web:e16d00459d5b3f8abd0f25",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
