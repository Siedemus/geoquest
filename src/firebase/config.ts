import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXzda4oObdskuCiFgqCOMGm1irOuswiPA",
  authDomain: "geoquest-acd74.firebaseapp.com",
  projectId: "geoquest-acd74",
  storageBucket: "geoquest-acd74.appspot.com",
  messagingSenderId: "272150897202",
  appId: "1:272150897202:web:4f399afe792e417544922b",
  measurementId: "G-RKPXLDY4HE",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
