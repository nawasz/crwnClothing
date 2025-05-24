import React from 'react'
import { useEffect }  from 'react';
import { getRedirectResult} from 'firebase/auth';
import { googleProvider,auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect} from '../../../utils/firebase/firebase.utils'; 
import SignUp from '../sign-up/sign-up-form-component';

function SignIn() {
  



  const  logGoogleUser = async () =>{
    const {user}  = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)

  } 
   
  return (
    <div>
      <h2>This is sign-in part</h2>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      <SignUp/>
     
    </div>
  )
}

export default SignIn;
