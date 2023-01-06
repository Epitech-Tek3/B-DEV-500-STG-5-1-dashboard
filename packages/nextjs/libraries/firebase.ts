import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/functions";
import "firebase/storage";
import { firebaseConfig, HOSTNAME } from "../utils/constants";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Important to use emulator
  if (HOSTNAME === "http://localhost:3000") {
    firebase.firestore().useEmulator("localhost", 8080);
    firebase.auth().useEmulator("http://localhost:9099");
    firebase.storage().useEmulator("localhost", 5002);
  }
  firebase.app().functions("europe-west1").useEmulator("localhost", 5001);
}

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export const functions = firebase.app().functions("europe-west1");

export const now = firebase.firestore.Timestamp.now();

export type FirebaseDate = firebase.firestore.Timestamp;

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  user: firestore.collection("users"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  project: firestore.collection("projects"),
  specification: firestore.collection("specification"),
  notification: firestore.collection("notifications"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
};

export const auth = firebase.auth();
