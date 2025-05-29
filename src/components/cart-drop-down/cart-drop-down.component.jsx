import './cart-drop-down.styles.scss'

import {React,useContext} from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.components'
import { CartContext } from '../contexts/cartContext'

const CartDropDown = () => {

  const {cartItems} = useContext(CartContext);

  
  return (
    <div className="drop-down-container">
        <div className="cart-items">
          {
            cartItems.map((ItemProps) => (
            <CartItem  {...ItemProps}/>))
          }
         </div>     
        <Button >GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown
