import "./product-card.styles.scss";

import {React,useContext} from "react";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { CartContext } from "../contexts/cartContext";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import {addItemToCart} from '../../store/cart/cart.action'
import {useDispatch} from 'react-redux';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  
   const {name, imageUrl, price} = product;
 
    const cartItems =  useSelector(selectCartItems);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => {dispatch(addItemToCart(cartItems,product))}}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
