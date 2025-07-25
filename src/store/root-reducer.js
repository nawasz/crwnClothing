import { combineReducers } from 'redux';
import { userReducer } from './user/user.reducer';
import { categoryReducer } from './categories/category.reducer';
import { CartReducer } from './cart/cart.reducer';
export const rootReducer =  combineReducers({
   user:userReducer,
   categories:categoryReducer,
   cart : CartReducer,
});