import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_4jFgLFxvl4vrsaS9VOtsfNom1Jem91k",
    authDomain: "fasebook-clone.firebaseapp.com",
    databaseURL: "https://fasebook-clone.firebaseio.com",
    projectId: "fasebook-clone",
    storageBucket: "fasebook-clone.appspot.com",
    messagingSenderId: "164367148640",
    appId: "1:164367148640:web:ae42c58357e2a784e68505",
    measurementId: "G-DPHBB1F67Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;