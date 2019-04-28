const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBJvL2Q2QmOTdAovt3yuMbxzpkL7nDndZ8",
    authDomain: "jfdzl2-krafteam.firebaseapp.com",
    databaseURL: "https://jfdzl2-krafteam.firebaseio.com",
    projectId: "jfdzl2-krafteam",
    storageBucket: "jfdzl2-krafteam.appspot.com",
    messagingSenderId: "44120038850"
  };


const app = firebase.initializeApp(config);

export const db = app.database();
export const auth = app.auth();