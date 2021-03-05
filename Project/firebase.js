import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyAI62tLeBS5c8AQ0mKgXXHXR4Z-c3wkTW8",
    authDomain: "elite-striker-265012.firebaseapp.com",
    databaseURL: "https://elite-striker-265012.firebaseio.com",
    projectId: "elite-striker-265012",
    storageBucket: "elite-striker-265012.appspot.com",
    messagingSenderId: "195183391360",
    appId: "1:195183391360:web:593e0db8a3e8ebb2ac2c65",
    measurementId: "G-DMK91FTKJH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase

