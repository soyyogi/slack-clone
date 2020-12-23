import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2VC0dPhRXK4FZVNaVaSZUGaOi5cq5gMA",
    authDomain: "slack-clone-436cc.firebaseapp.com",
    projectId: "slack-clone-436cc",
    storageBucket: "slack-clone-436cc.appspot.com",
    messagingSenderId: "308646820437",
    appId: "1:308646820437:web:ac9990878a6b4c156872dc",
    measurementId: "G-EHT6DY02GQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;