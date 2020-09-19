import firebase from "firebase/app";
import "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2yztj3grcooqxIN9sK1_qZ_uFqIZsOIo",
  authDomain: "travel-buddy-cf38b.firebaseapp.com",
  databaseURL: "https://travel-buddy-cf38b.firebaseio.com",
  projectId: "travel-buddy-cf38b",
  storageBucket: "travel-buddy-cf38b.appspot.com",
  messagingSenderId: "591401433137",
  appId: "1:591401433137:web:a19a00a4954d7b6fc1bd10",
  measurementId: "G-ETH75DHVVV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };