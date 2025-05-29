import "./product-card.styles.scss";

import {React,useContext} from "react";
import Button from "../button/button.component";
import { CartContext } from "../contexts/cartContext";

const ProductCard = ({Product} ) => {
  
   const {name, imageUrl, price} = Product;
   const {addItemToCart} = useContext(CartContext);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="product-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => {addItemToCart(Product)}}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
