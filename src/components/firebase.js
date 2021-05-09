import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA384wefks7NkXKZ4HIS0DW3PzJ3zydSLo",
  authDomain: "fir-login-925a5.firebaseapp.com",
  projectId: "fir-login-925a5",
  storageBucket: "fir-login-925a5.appspot.com",
  messagingSenderId: "273581573478",
  appId: "1:273581573478:web:a9e16be7376abba797f4a7",
  measurementId: "G-C2EECCVSRF",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
firebase.analytics();
