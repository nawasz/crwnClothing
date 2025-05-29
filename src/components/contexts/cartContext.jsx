import { createContext, useState,useEffect} from "react";
import { useFormState } from "react-dom";

const addCartItem = (cartItems, productToAdd) => {
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCarItem) {
    const { quantity } = existingCarItem;
    existingCarItem.quantity = quantity + 1;
    return [...cartItems];
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  cartItems: null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  
  useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0)
    setCartCount(newCartCount);
  },[cartItems])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems,cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
