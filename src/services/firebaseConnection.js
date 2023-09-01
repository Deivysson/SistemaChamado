
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZ_IXQ5NscCzQHaphSYn5Em2Ma0emssGA",
  authDomain: "sistemachamados-41f7e.firebaseapp.com",
  projectId: "sistemachamados-41f7e",
  storageBucket: "sistemachamados-41f7e.appspot.com",
  messagingSenderId: "181028416220",
  appId: "1:181028416220:web:4a6724f07bacaff60a2219"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };