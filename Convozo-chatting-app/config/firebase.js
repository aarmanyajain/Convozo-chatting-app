import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBXrLryn0cO4MTQSrcFbfhrEXaOxaUMMNE",
  authDomain: "chattingapp-b7785.firebaseapp.com",
  databaseURL: "https://chattingapp-b7785-default-rtdb.firebaseio.com",
  projectId: "chattingapp-b7785",
  storageBucket: "chattingapp-b7785.appspot.com",
  messagingSenderId: "565649657010",
  appId: "1:565649657010:web:50527d1c875a74c4810dab",
};
// initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();