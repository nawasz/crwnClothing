import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen  = (boolean) =>createAction("SET_CART_OPEN",boolean)

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

export  const addItemToCart = (cartItems,productToAdd) => {
    const newCartItems = addCartItem(cartItems,productToAdd);
    return createAction('SET_CART_ITEMS',{cartItems:newCartItems})
    // updateCartItemsReducer(newCartItems);
  };
export   const removeItemFromCart = (cartItems,ItemToRemove) => {
    const newCartItems = removeCartItem( cartItems,ItemToRemove);
  return createAction('SET_CART_ITEMS',{cartItems:newCartItems})
  };
export   const clearItemFromCart = (cartItems,ItemToClear) => {
    const newCartItems = clearCartItem(cartItems,ItemToClear);
 return createAction('SET_CART_ITEMS',{cartItems:newCartItems})
  };