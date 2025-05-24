import { useState } from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormFields from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import Button from '../button/button.component';

const defaultFormFields = {
    email:'',
    password:'',
};

const SignInForm = () =>{
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password}  = formFields;
    
    const handleChange = (event) =>{
        //    console.log(event)
           const {name,value} =event.target;
        
          setFormFields({  ...formFields,[name]:value})
         
    }
    const resetFormFields = () =>{
      setFormFields(defaultFormFields);
    }
    
    const  signInWithGoogle = async () =>{
    const {user}  = await signInWithGooglePopup();
   await createUserDocumentFromAuth(user)

  }
    const handleSubmit = async(event) => {

      event.preventDefault();
     

     try{
       const response = await signInAuthUserWithEmailAndPassword(email,password);
     
      resetFormFields();

     }catch(error){
      console.log(error)
        }
    }
console.log(formFields)
    return (
        <div className='sign-up-container'>
          <h2>Already have an account?</h2>
        <span>Sign in with email and password</span>
        
        <form onSubmit={ handleSubmit }>

            <FormFields 
            label = 'Email'
             type="email" name ="email"  onChange={handleChange}   value={email}  required
            />

             <FormFields 
            label='Password'
            type="password" name ="password" onChange={handleChange}  value={password} required/>
            
             <div className='buttons-container'>
              <Button  type='submit'>Sign In</Button>          
             <Button  buttonType = 'google' type='button' onClick={signInWithGoogle}>Google sign in</Button>   
             </div>
            
        </form>
        
        </div>
    )
}

export default SignInForm;