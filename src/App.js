import logo from './logo.svg';
import './App.css';
import { Routes,Route,Outlet} from 'react-router-dom';
import Home from './components/Routes/Home/home-component';
import Navigation from './components/Routes/navigation/navigation.component';
import SignIn from './components/Routes/sign-in/sign-in.component';
function App() {
  const Shop  = () =>{
        return (
          <div>I'm the Shop Page</div>
        );
  }
 

  return(
    <Routes>
    <Route  path='/' element={<Navigation/>}>
    <Route index element = {<Home/>}></Route>
    <Route path='/shop' element = {<Shop/>}></Route>
    <Route path='/signIn' element={<SignIn/>}></Route>
    
    </Route>
  </Routes>
  )
  
 
}

export default App;
