import React from 'react'
import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'; 

function signIn() {
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
    </div>
  )
}

export default signIn;
