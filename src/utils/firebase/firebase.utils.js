import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
//getAUth is a Auth instance
//getFireStore :intansitiate fireStore
// doc:retrieve documents inside of our fire store database ,generally used to get the document instance
// getDoc:getting documents data
// setDoc: setting documents data
import { getFirestore, doc, setDoc, getDoc,collection,writeBatch,query,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtEm4eMKNM10r3NyMPwIe_te0DfnW-o_0",
  authDomain: "crwn-clothing-db-a12dd.firebaseapp.com",
  projectId: "crwn-clothing-db-a12dd",
  storageBucket: "crwn-clothing-db-a12dd.firebasestorage.app",
  messagingSenderId: "181152479908",
  appId: "1:181152479908:web:aeb9e3a439c338795e4431",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// in order to use this google Authentication, we need to intialize a provider using GoogleAuthProvider Class
export const googleProvider = new GoogleAuthProvider();

// will take some kind of confirguration objects and we can tell different ways the Google auth Provider can behave
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => {
 
  signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore(); //  this db instance 



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocref = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocref);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocref;
  // if user data exists

  // if user does not exist
  // create / set  the document with data from userAuth in my collection

  //return userDocref
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);

// onAuthStateChanged is a open listener, i.e the moment you set it always waiting to see whether auth state changes , the moment it does it will runs a callback
// 

// when ever we call this function it has to give me a call back 

/***
 *  collection insertion 
 */

export const addCollectionAndDocuments  = async (collectionKey,objectsToAdd) => {
         const collectionRef = collection(db,collectionKey); // creating a collection reference 
         const batch =  writeBatch(db); // we have to pass in the database that we are trying to make batch on 
         objectsToAdd.forEach((object) =>{

          // get the document reference 
          const docRef = doc(collectionRef,object.title.toLowerCase()); // doc(db, key)
          batch.set(docRef,object); // attach writes
          
         })
         await batch.commit();
         console.log('done');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db,'category');
    const q = query(collectionRef); // this will  snapshot with this 

    const querySnapshot  = await getDocs(q); //gets snapShots of documents in that collectionRef
                                            // querySnapshot.doc  will give array of all individual documents  inside
                                            
                        return   querySnapshot.docs.map((docsSnapShot) => docsSnapShot.data()) ;
                        // reduce((acc,docSnapShot)=>{
                              //  const {title, items } = docSnapShot.data();
                              //  acc[title.toLowerCase() ] = items;
                              //  return acc;
                          //  },{})
    
}