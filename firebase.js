import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyS31NWuSavoct6wk02e7RkSOAiebkTmU",
    authDomain: "facebook-clone-2b452.firebaseapp.com",
    projectId: "facebook-clone-2b452",
    storageBucket: "facebook-clone-2b452.appspot.com",
    messagingSenderId: "914909161218",
    appId: "1:914909161218:web:bfd658898b036d301d041b"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};