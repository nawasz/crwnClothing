import React, { useContext } from 'react'

import {ReactComponent as Cart} from '../../Assets/shopping-bag.svg' 
import './cart-icon.styles.scss'
import { CartContext } from '../contexts/cartContext'
const CartIcon = () => {
  const {isCartOpen,setCartOpen,cartItems,cartCount}=useContext(CartContext);
  
  const toggleHandler = () =>{
    if(isCartOpen){
      setCartOpen(false);
      return;
    }
   setCartOpen(true);
  } 
  return (
    <div className='cart-icon-container' onClick ={toggleHandler}>
      <Cart  className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>

    </div>
  )
}

export default CartIcon;
