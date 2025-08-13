// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_CONFIG_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_CONFIG_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_FIREBASE_CONFIG_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_CONFIG_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_CONFIG_MESSAGING_SENDERID}`,
  appId: `${import.meta.env.VITE_FIREBASE_CONFIG_APP_ID}`,
  measurementId: `${import.meta.env.VITE_FIREBASE_CONFIG_MEASUREMENT_ID}`
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, messaging, getToken, onMessage };
