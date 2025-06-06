import './cart-drop-down.styles.scss'

import {React,useContext} from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.components'
import { CartContext } from '../contexts/cartContext'
import { useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'
import {selectIsCartOpen,selectCartItems} from '../../store/cart/cart.selector'
import {setIsCartOpen} from '../../store/cart/cart.action'
const CartDropDown = () => {          
  const navigate =useNavigate();
  const   isCartOpen = useSelector(selectIsCartOpen);
  const   cartItems = useSelector(selectCartItems);
  const goToCheckoutHandler =() =>{
        navigate('/checkout')
         setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="drop-down-container">
        <div className="cart-items">
          {
            cartItems.map((ItemProps) => (
            <CartItem  {...ItemProps}/>))
          }
         </div>     
        <Button  onClick={()=> goToCheckoutHandler()}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown
