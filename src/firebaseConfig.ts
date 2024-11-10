import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqSuKIgQCsjMPQGMTQmJBZmFSYrQT2u40",
  authDomain: "desafio-03-aws-react-leoncio.firebaseapp.com",
  projectId: "desafio-03-aws-react-leoncio",
  storageBucket: "desafio-03-aws-react-leoncio.firebasestorage.app",
  messagingSenderId: "372535515289",
  appId: "1:372535515289:web:983e592a4278aeab4a0008",
  measurementId: "G-T03PFRVT0X"
};

export const app = initializeApp(firebaseConfig);