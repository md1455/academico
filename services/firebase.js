import { initializeApp, getApp } from "firebase/app";
import { getDatabase  } from "firebase/database";

let app
try{
    app = getApp()
} catch(error) {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: 'https://academico-5dd49-default-rtdb.firebaseio.com',
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  app = initializeApp(firebaseConfig);

}

const db = getDatabase(app)

export { db }