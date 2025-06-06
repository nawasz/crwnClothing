import React, { useContext} from 'react'

import {ReactComponent as Cart} from '../../Assets/shopping-bag.svg' 
import './cart-icon.styles.scss'

import { createAction } from '../../utils/reducer/reducer.utils'
import { useDispatch,useSelector } from 'react-redux'
import {selectCartCount,selectIsCartOpen} from '../../store/cart/cart.selector';
import { setIsCartOpen} from '../../store/cart/cart.action'
const CartIcon = () => {
  //const {isCartOpen,setIsCartOpen,cartItems,cartCount}=useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount  = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)
  const toggleHandler = () => { 
     console.log(isCartOpen);
     console.log('from cart-icon')
   return  dispatch(setIsCartOpen(!isCartOpen))
  };
      

   
  
  return (
    <div className='cart-icon-container' onClick ={toggleHandler}>
      <Cart  className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>

    </div>
  )
}

export default CartIcon;
