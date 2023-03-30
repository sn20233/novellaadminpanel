// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { logEvent } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXUKSMQiFlL976nPftGrc6vrsFzC4MX78",
//   authDomain: "newnovella-2ca81.firebaseapp.com",
//   projectId: "newnovella-2ca81",
//   storageBucket: "newnovella-2ca81.appspot.com",
//   messagingSenderId: "613868329296",
//   appId: "1:613868329296:web:b16b5afa6a5063368cf455",
//   measurementId: "G-RJGNMXMCS2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics();

// export { app };
// export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPgq2IE97GwGvPp-pjwik5y5n0Bl63FdQ",
  authDomain: "novella-final-1.firebaseapp.com",
  projectId: "novella-final-1",
  storageBucket: "novella-final-1.appspot.com",
  messagingSenderId: "443875417576",
  appId: "1:443875417576:web:3d51a394f1efe91942985d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics();

export { app };
export { db };