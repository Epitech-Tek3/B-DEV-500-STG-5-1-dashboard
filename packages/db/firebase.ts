import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/analytics";

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  projectId: process.env.PROJECT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().useEmulator("localhost", 8080);
  firebase.auth().useEmulator("http://localhost:9099");
  firebase.storage().useEmulator("localhost", 9199);
}

export const firestore = firebase.firestore();

export const firebaseApp = firebase;

export const storage = firebase.storage();

export const now = firebase.firestore.Timestamp.now();

export const auth = {
  auth: firebase.auth(),
  currentUser: firebase.auth().currentUser
};

export const database = {
  user: firestore.collection("users")
};

export type FirebaseDate = firebase.firestore.Timestamp;

// Important to use emulator
