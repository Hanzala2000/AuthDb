import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import "firebase/compat/database";
import firebaseConfig from './config'



firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.database();

export  {auth,db};