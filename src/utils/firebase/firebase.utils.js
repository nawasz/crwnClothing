import { initializeApp } from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
//getAUth is a Auth instance
          //getFireStore :intansitiate fireStore
          // doc:retrieve documents inside of our fire store database ,generally used to get the document instance 
          // getDoc:getting documents data
          // setDoc: setting documents data
import {getFirestore,doc,setDoc,getDoc,} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDtEm4eMKNM10r3NyMPwIe_te0DfnW-o_0",
    authDomain: "crwn-clothing-db-a12dd.firebaseapp.com",
    projectId: "crwn-clothing-db-a12dd",
    storageBucket: "crwn-clothing-db-a12dd.firebasestorage.app",
    messagingSenderId: "181152479908",
    appId: "1:181152479908:web:aeb9e3a439c338795e4431"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // in order to use this google Authentication, we need to intialize a provider using GoogleAuthProvider Class 
  const provider = new GoogleAuthProvider();

   // will take some kind of confirguration objects and we can tell different ways the Google auth Provider can behave
  provider.setCustomParameters({
          prompt: "select_account"
  })


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)


  export const db = getFirestore()
  export const createUserDocumentFromAuth = async (userAuth) => {

        const userDocref = doc(db,'users',userAuth.uid)
        console.log(userDocref);
        const userSnapShot =    await getDoc(userDocref)
        console.log(userSnapShot)
        console.log(userSnapShot.exists() ) // allows us to check whether data exists 

         if(!userSnapShot.exists()){
                const {displayName,email } = userAuth;
                const createdAt = new Date();
                try{
                             await setDoc(userDocref,{
                                displayName,
                                email,
                                createdAt
                             });
                }catch(error){
                        console.log('error creating the user',error.message)
                }
         }
          return userDocref;
        // if user data exists
          
          // if user does not exist
             // create / set  the document with data from userAuth in my collection 

        //return userDocref 
  }