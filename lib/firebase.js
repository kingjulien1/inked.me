import firebaseConfig from "../firebase-config.js";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export default firebase;
