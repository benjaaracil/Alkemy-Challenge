import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_FIREBASE_APP_ID
})

export const auth = app.auth();
export default app;