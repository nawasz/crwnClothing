import "./checkout-styles.scss";
import { React, useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cartContext";
import CheckoutItem from "../checkout-item/checkout-item.component";
import './checkout-styles.scss';

const Checkout = () => {
  const { cartItems, setCartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      
        {cartItems.map((cartItem) => (
          
            <CheckoutItem key={cartItem.id} {...cartItem} />
          
        ))}
        <span className='Total'>Total:{totalPrice}</span>
      
    </div>
  );
};

export default Checkout;
