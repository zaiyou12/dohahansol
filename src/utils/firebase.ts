// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB4HDbXvoj-ZLuR1B3xMb37ytV1Rseltxw',
	authDomain: 'so-and-bae.firebaseapp.com',
	projectId: 'so-and-bae',
	storageBucket: 'so-and-bae.appspot.com',
	messagingSenderId: '57890734668',
	appId: '1:57890734668:web:1fce59c9f18be5397aaae9',
	measurementId: 'G-1QVDH4XQJQ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
