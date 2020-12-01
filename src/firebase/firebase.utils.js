import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvtr7SUKIFzmJJE1guUgXtN7SRJGTPRqg",
    authDomain: "noot-wear.firebaseapp.com",
    databaseURL: "https://noot-wear.firebaseio.com",
    projectId: "noot-wear",
    storageBucket: "noot-wear.appspot.com",
    messagingSenderId: "119174075557",
    appId: "1:119174075557:web:2b5d3c818cd7818645294c",
    measurementId: "G-J47BJMPF5D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;