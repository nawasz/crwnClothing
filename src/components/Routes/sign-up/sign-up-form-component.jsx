import { useState } from 'react';
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils'

import FormFields from '../../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../../button/button.component';


const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
};

const SignUpForm = () =>{
    
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}  = formFields;
    
                          
                               
    const handleChange = (event) =>{
       
           const {name,value} =event.target;
        
          setFormFields({  ...formFields,[name]:value})
         
    }
    const resetFormFields = () =>{
      setFormFields(defaultFormFields);
    }
    const handleSubmit = async(event) => {
      event.preventDefault();
      if(password !== confirmPassword){
        alert('password incorrect');
        return
      }
     try{
       const  {user} =  await createAuthUserWithEmailAndPassword(email,password);
    
       
      await createUserDocumentFromAuth(user,{displayName })
      resetFormFields();

     }catch(e){
        if(e.code === 'auth/email-already-in-use'){
                   alert('Cannot create user,email already in use ')
        }
        console.log(e)}
    }

    return (
        <div className='sign-up-container'>
          <h2>Don't have an account?</h2>
        <span>Sign up with email and password</span>
        
        <form onSubmit={ handleSubmit }>

            <FormFields 
            label = 'DisplayName'
            
            type="text" name ="displayName" onChange={handleChange} value={displayName}  required
            
            />
            <FormFields 
            label = 'Email'
             type="email" name ="email"  onChange={handleChange}   value={email}  required
            />

             <FormFields 
            label='Password'
            type="password" name ="password" onChange={handleChange}  value={password} required/>
            
            <FormFields
              label='Confirm Password'
              type="text" name ="confirmPassword" onChange={handleChange}  value={confirmPassword}required
            />
             <Button  type='submit'>Sign Up</Button>          
           
        </form>
        
        </div>
    )
}

export default SignUpForm;