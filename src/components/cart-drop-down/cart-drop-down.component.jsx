import './cart-drop-down.styles.scss'

import {React,useContext} from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.components'
import { CartContext } from '../contexts/cartContext'
import { useNavigate } from 'react-router-dom' 

const CartDropDown = () => {

  const {cartItems,setCartOpen} = useContext(CartContext);

  const navigate =useNavigate();
  
  const goToCheckoutHandler =() =>{
        navigate('/checkout')
        setCartOpen(false)
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
