importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyCqoy43wBV1k1BU29k2l9cH2btf7XJ2Q5I",
    authDomain: "push-notification-13f04.firebaseapp.com",
    projectId: "push-notification-13f04",
    storageBucket: "push-notification-13f04.appspot.com",
    messagingSenderId: "972161151166",
    appId: "1:972161151166:web:5c5a96d5cbd94b9d9baeef",
    measurementId: "G-9M18PZDHT1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();