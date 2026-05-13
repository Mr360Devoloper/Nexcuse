// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "nexcuse-auth.firebaseapp.com",
  projectId: "nexcuse-auth",
  storageBucket: "nexcuse-auth.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "XXXXXX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
