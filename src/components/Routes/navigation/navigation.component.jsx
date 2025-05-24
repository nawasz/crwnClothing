
import { Outlet,Link} from "react-router-dom";
 import {ReactComponent as CrwnLogo} from '../../../Assets/crown.svg';
 import './navigation.styles.css'
const Navigation = () =>{
    return (
    <>
      
        <div className="navigation">
            <Link className="nav-logo" to='/'>
            <CrwnLogo/>
            </Link>
            
            <div className="nav-link-container">
                <Link className="nav-link" to='/auth'>SIGNIN</Link>
                <Link className="nav-link" to='/shop'>SHOP</Link>

            </div>

        </div>
    
          <Outlet/>
    

      </>
    )
  }

  export default Navigation;