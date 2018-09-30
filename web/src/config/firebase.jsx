import firebase from "firebase";
import 'firebase/firestore';

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
export const pillarsRef = db.collection("pillars");