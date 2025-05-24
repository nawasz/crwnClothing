import React from 'react'
import { useEffect }  from 'react';
import { getRedirectResult} from 'firebase/auth';

import SignUp from '../sign-up/sign-up-form-component';
import SignInForm from '../../sign-in-form/sign-in-form-component';
import './authentication.styles.scss'


function Authentication() {
  



   
   
  return (
    <div className ='authentication-container'>
      {/* <h2>I already have an account</h2>
      <span>Sign in with email and password</span> */}

      
      
      {/* <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button> */}
      <SignInForm/>
      <SignUp/>
     
    </div>
  )
}

export default Authentication;
