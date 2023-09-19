// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {  FIREBASE_API_KEY,
          FIREBASE_AUTH_DOMAIN,
          FIREBASE_DATABASE_URL,
          FIREBASE_STORAGE_BUCKET,
          FIREBASE_MESSAGING_SENDER_ID,
          FIREBASE_APP_ID,
          FIREBASE_MEASUREMENT_ID,
          FIREBASE_PROJECT_ID
} from "$env/static/private";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey:             FIREBASE_API_KEY,
  authDomain:         FIREBASE_AUTH_DOMAIN,
  databaseURL:        FIREBASE_DATABASE_URL,
  projectId:          FIREBASE_PROJECT_ID,
  storageBucket:      FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  FIREBASE_MESSAGING_SENDER_ID,
  appId:              FIREBASE_APP_ID,
  measurementId:      FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}
export const db = getDatabase(app); 
