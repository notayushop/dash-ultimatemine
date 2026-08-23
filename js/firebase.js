// ============================================
// FIREBASE CONFIG - FIXED VERSION
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyDnbnuuwdjfGgaj8lxsP8iDudLopgdF8Mk",
  authDomain: "ultimateminein.firebaseapp.com",
  databaseURL: "https://ultimateminein-default-rtdb.firebaseio.com",
  projectId: "ultimateminein",
  storageBucket: "ultimateminein.firebasestorage.app",
  messagingSenderId: "872553920198",
  appId: "1:872553920198:web:2d0139bc35d4b780b849c7",
  measurementId: "G-QDGJL45X1H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global shortcuts
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// Confirm loaded
console.log('✅ Firebase initialized:', firebaseConfig.projectId);
