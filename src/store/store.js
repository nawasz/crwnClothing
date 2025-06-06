import { configureStore,applyMiddleware,compose} from '@reduxjs/toolkit';
import logger from 'redux-logger'
// root-reducer

import { rootReducer } from './root-reducer';
const middleWares =[logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));
// runs before an action hits the reducer,so when ever you dispatch an action ,before an action it  hits the middleware first 
export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false,immutableCheck: false}).concat(logger),
});