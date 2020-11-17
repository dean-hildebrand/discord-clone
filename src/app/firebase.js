import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAD_QTngk5hGqKQWjlqiNoVsqGnyFLzofI",
  authDomain: "discord-clone-75b51.firebaseapp.com",
  databaseURL: "https://discord-clone-75b51.firebaseio.com",
  projectId: "discord-clone-75b51",
  storageBucket: "discord-clone-75b51.appspot.com",
  messagingSenderId: "794653081957",
  appId: "1:794653081957:web:c174a2b3a015d5d67da18c",
  measurementId: "G-VX739LK6Z8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
