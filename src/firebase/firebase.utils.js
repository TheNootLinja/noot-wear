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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            throw new Error('ERROR CREATING USER WITH A MESSAGE OF:', err.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;