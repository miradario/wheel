var firebase;
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAs47wGjhEiHT-6mcsGcCb36UZXbAjQgqU",
  authDomain: "resilience-c37d0.firebaseapp.com",
  projectId: "resilience-c37d0",
  storageBucket: "resilience-c37d0.appspot.com",
  messagingSenderId: "934257465378",
  appId: "1:934257465378:web:daa534b74e1e0b5560927b",
  measurementId: "G-LN4JPD9B9J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var userfb = "app@tlexinstitute.com";
var passfb = "GreatApp!2022";

firebase
  .auth()
  .signInWithEmailAndPassword(userfb, passfb)
  .then(function (result) {})
  .catch(function (error) {
   console.log (error);
  });
