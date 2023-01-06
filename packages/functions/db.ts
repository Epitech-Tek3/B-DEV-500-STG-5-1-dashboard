import * as firebase from "firebase-admin";

if (!firebase.apps.length) {
  firebase.initializeApp({ serviceAccountId: "azinove-project-creator@azinove-d89e6.iam.gserviceaccount.com" });
}

const app = firebase.app();
const db = firebase.firestore();
const store = app.storage();

const auth = app.auth();

export type FirebaseDate = firebase.firestore.Timestamp;
export const now = firebase.firestore.Timestamp.now();
export const database = {
  folders: db.collection("folders"),
  files: db.collection("files"),
  user: db.collection("users"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  project: db.collection("projects"),
  specification: db.collection("specification"),
  notification: db.collection("notifications"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
};
export { db, firebase, store, auth };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
