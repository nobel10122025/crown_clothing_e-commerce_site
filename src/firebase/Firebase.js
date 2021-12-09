import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyACxJaBzmdZeiiI3D0Ok-1mfMQUJkx8DcU",
    authDomain: "crwn-clothing-ea6a5.firebaseapp.com",
    projectId: "crwn-clothing-ea6a5",
    storageBucket: "crwn-clothing-ea6a5.appspot.com",
    messagingSenderId: "1035543594747",
    appId: "1:1035543594747:web:b3345a59c10c956dc3925e",
    measurementId: "G-5MB2BM8V8L"
  
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth , additionalData) => {
    if (!userAuth) return ; 
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('user canot be created')
        }

    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;