import { createContext, useReducer } from "react";


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
const removeCartItem = (cartItems, ItemToRemove) => {
  //find the  item from the cart
  const cartItemToRemove = cartItems.find(
    (cartItem) => cartItem.id === ItemToRemove.id
  );
  // if we are trying to decrement the  item with quantity:1 , then remove it from the cart
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // if we are decreasing its quantity do it
  cartItemToRemove.quantity -= 1;
  return [...cartItems];
};
const clearCartItem = (cartItems, ItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== ItemToClear.id);
};
export const CartContext = createContext({
  cartItems: null,
});
const CartReducer = (state, action) => {
  const { type, payload } = action;
   /**
   * payload:{
   *  ...state,...payload
   * }
   */
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "SET_CART_OPEN":
      return {
        ...state,
        ...payload,
       
      };
    default:
      throw new Error(`unhandled ${type} `);
  }
};
const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { cartItems, isCartOpen, cartCount, totalPrice } = state;
console.log(state);
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (ItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, ItemToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (ItemToClear) => {
    const newCartItems = clearCartItem(cartItems, ItemToClear);
    updateCartItemsReducer(newCartItems);
  };
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const total = newCartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: total,
      },
    });
  };
  const setIsCartOpen = () =>{
      dispatch({type:"SET_CART_OPEN",
     payload:{isCartOpen:!isCartOpen}
    })
    }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
