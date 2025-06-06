import "./checkout-item.scss";

import { React, useState, useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action"; 
import {removeItemFromCart} from "../../store/cart/cart.action"; 
import {clearItemFromCart} from "../../store/cart/cart.action";
import { useDispatch } from "react-redux"; 


const CheckoutItem = (cartItem) => {
  const { id, imageUrl, name, price, quantity } = cartItem;
  const dispatch  = useDispatch();

  //const { addItemToCart, removeItemFromCart,clearItemFromCart} = useContext(CartContext);
     const cartItems = useSelector(selectCartItems)
    
                 
  return (
    <div className="checkout-item-container">
       <div className="image-container">
             <img src={imageUrl} alt={`${name}`}  />
       </div>
      
      <span className='name'>{name}</span>
      
      
       <span className='quantity'>
        <div className="arrow" onClick={() => {
          dispatch(removeItemFromCart(cartItems,cartItem));
        }}>&#10094;</div>
        
        <span className='value'>{quantity}</span>

        <div className="arrow" onClick={() => {
          dispatch(addItemToCart(cartItems,cartItem));
        }}>&#10095;</div>
        
       </span>
      <span className='price'>{price}</span>
       <div className="remove-button" onClick={() =>{dispatch(clearItemFromCart(cartItems,cartItem))}}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
