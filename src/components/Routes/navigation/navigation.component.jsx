import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../Assets/crown.svg";

import {NavigationCOntainer,LinkContainer} from "./navigation.styles.jsx";
import { UserContext } from "../../../../src/components/contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
//import {CartIcon} from '../../../components/cart-icon/cart-icon.component.jsx';
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-drop-down/cart-drop-down.component";
import { CartContext } from "../../contexts/cartContext";
import { useSelector,useDispatch } from "react-redux";
import { selectIsCartOpen } from "../../../store/cart/cart.selector.js";
import {setIsCartOpen} from "../../../store/cart/cart.action.js"
const Navigation = () => {
    
    const  currentUser  = useSelector((state) => state.user.currentUser)
    
    const IsCartOpen =   useSelector(selectIsCartOpen)
   
 
  return (
    <>
      <NavigationCOntainer>
        <Link className="nav-logo" to="/">
          <CrwnLogo />
        </Link>

        <LinkContainer>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNIN
            </Link>

            
          )}
         <CartIcon />
        </LinkContainer>
      
        
      </NavigationCOntainer>
         {IsCartOpen && <CartDropDown />}
      <Outlet />
    </>
  );
};

export default Navigation;
