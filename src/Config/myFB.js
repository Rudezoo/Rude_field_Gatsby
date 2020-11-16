import firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.GATSBY_API_KEY,
    authDomain: process.env.GATSBY_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_DATABASE_URL,
    projectId: process.env.GATSBY_PROJECT_ID,
    storageBucket: process.env.GATSBY_STORAGE_BUCKET,
    messagingSenderId: process.env.GATSBY_MESSAGIN_ID,
    appId: process.env.GATSBY_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance=firebase;

export const authService=firebase.auth();
