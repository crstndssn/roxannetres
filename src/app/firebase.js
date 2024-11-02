import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/analytics';

// Verificar si Firebase ya está inicializado para evitar inicialización múltiple
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP,
        measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID 
    });
}

// Inicialización de Firebase Services
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const store = firebase.firestore();
const storage = firebase.storage();

// Verificar si estamos en el cliente para usar Firebase Analytics
if (typeof window !== 'undefined' && 'measurementId' in firebase.app().options) {
    const analytics = firebase.analytics();
    analytics.logEvent('notification_received');
}

export { firebase, auth, store, storage, googleProvider, facebookProvider };
