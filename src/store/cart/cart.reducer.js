const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  
};


export const CartReducer = (state = INITIAL_STATE, action={}) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "SET_CART_OPEN":
      return {
        ...state,
       isCartOpen: payload,
         
       
      };
    default:
        return state;
  }
};