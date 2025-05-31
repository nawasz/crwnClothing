import { createContext, useState,useEffect} from "react";
import { useFormState } from "react-dom";

const addCartItem = (cartItems, productToAdd) => {
  const existingCarItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCarItem) {
    const { quantity } = existingCarItem;
    existingCarItem.quantity = quantity + 1; // we are picking that Item and incrementing its count amd updating again 
  
    return [...cartItems];
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = ( cartItems,ItemToRemove) =>{
 //find the  item from the cart
         const cartItemToRemove=cartItems.find((cartItem) => cartItem.id === ItemToRemove.id);
    // if we are trying to decrement the  item with quantity:1 , then remove it from the cart
         if(cartItemToRemove.quantity === 1){
             return cartItems.filter((cartItem) =>cartItem.id !== cartItemToRemove.id);
         }
    // if we are decreasing its quantity do it 
        cartItemToRemove.quantity -=1;
              return[...cartItems];
}
const clearCartItem = (cartItems,ItemToClear) =>{
     return cartItems.filter((cartItem) => cartItem.id !== ItemToClear.id )
}
export const CartContext = createContext({
  cartItems: null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  
  useEffect(()=>{
    const newCartCount = cartItems.reduce((total,cartItem)=>total+ cartItem.quantity,0)
    const total =cartItems.reduce((acc,curr) => acc+ (curr.price * curr.quantity),0)
    setTotalPrice(total);
    setCartCount(newCartCount);
  },[cartItems])
  useEffect(()=>{
    const total =cartItems.reduce((acc,curr) => acc+ (curr.price * curr.quantity),0)
    setTotalPrice(total);
  },[cartItems])
  const addItemToCart = (productToAdd) => {
              setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (ItemToRemove) =>{
              setCartItems(removeCartItem(cartItems,ItemToRemove));
  }
  const clearItemFromCart = (ItemToClear) =>{
             setCartItems(clearCartItem(cartItems,ItemToClear));
  }
  const value = { isCartOpen, setCartOpen, addItemToCart, cartItems,cartCount,setCartItems,totalPrice,removeItemFromCart,clearItemFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
