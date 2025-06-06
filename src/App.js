import logo from './logo.svg';
import './App.css';
import { Routes,Route,Outlet} from 'react-router-dom';
import Home from './components/Routes/Home/home-component';
import Navigation from './components/Routes/navigation/navigation.component';
import Authentication from './components/Routes/authentication/authentication.component';
import Shop from './components/Routes/Shop/shop.component';
import Checkout from './components/checkout/checkout-component';
import { useEffect } from 'react';

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "./utils/firebase/firebase.utils";
import { useDispatch } from 'react-redux';

function App() {
 const dispatch =useDispatch();
  useEffect(() => {
          const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
              createUserDocumentFromAuth(user);
            }
          // setCurrentUser(user);
          
          dispatch({type:'SET_CURRENT_USER', payload:user})
          });

          // when App  mounts it will check the authentication status automatically
          
          // this function calls callback function when ever authentication state of our authstate changed
          // this will unsubscribe function  when ever it will ummount
          return unsubscribe;
        }, []); 

  return(
    <Routes>
    <Route  path='/' element={<Navigation/>}>
    <Route index element = {<Home/>}></Route>
    <Route path='/shop/*' element = {<Shop/>}></Route>
    <Route path='/auth' element={<Authentication/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    
    </Route>
  </Routes>
  )
  
 
}

export default App;
