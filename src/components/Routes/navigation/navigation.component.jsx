import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../Assets/crown.svg";
import "./navigation.styles.css";
import { UserContext } from "../../../../src/components/contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
//import {CartIcon} from '../../../components/cart-icon/cart-icon.component.jsx';
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-drop-down/cart-drop-down.component";
import { CartContext } from "../../contexts/cartContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen,setCartOpen} =useContext(CartContext);

  

  return (
    <>
      <div className="navigation">
        <Link className="nav-logo" to="/">
          <CrwnLogo />
        </Link>

        <div className="nav-link-container">
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
        </div>
      
        
      </div>
         {isCartOpen && <CartDropDown />}
      <Outlet />
    </>
  );
};

export default Navigation;
