import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBZrROycG7EQY-jbi_OLDcYUsXuCobSan0",
    authDomain: "social-react-app-59ece.firebaseapp.com",
    projectId: "social-react-app-59ece",
    storageBucket: "social-react-app-59ece.appspot.com",
    messagingSenderId: "818103807598",
    appId: "1:818103807598:web:b1aef61d871f39daf3c07f"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;