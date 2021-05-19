import firebase from 'firebase';
//import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDTZ-YwnQHHRX8a4j3o7A8wGcSvyepNsys",
    authDomain: "note-ly-5df2c.firebaseapp.com",
    databaseURL: "https://note-ly-5df2c-default-rtdb.firebaseio.com",
    projectId: "note-ly-5df2c",
    storageBucket: "note-ly-5df2c.appspot.com",
    messagingSenderId: "719902533004",
    appId: "1:719902533004:web:3fa64e10d94e5af9a1e2a9",
    measurementId: "G-19HWKY655Y"
  };
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();

const rootRef = firebase.database().ref();
    export const tasksRef = rootRef.child('tasks');
    export const timeRef = firebase.database.ServerValue.TIMESTAMP;