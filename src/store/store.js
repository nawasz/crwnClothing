import { configureStore,applyMiddleware,compose} from '@reduxjs/toolkit';
import logger from 'redux-logger'
import  {perisistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { thunk } from 'redux-thunk';
// root-reducer

import { rootReducer } from './root-reducer';
import persistStore from 'redux-persist/es/persistStore';
const middleWares =[process.env.NODE_ENV === 'development' && logger,thunk,].filter(Boolean);

// const composedEnhancers = compose(applyMiddleware(...middleWares));
// runs before an action hits the reducer,so when ever you dispatch an action ,before an action it  hits the middleware first 


//we need a configuration object that tells redux persist what we want


const persistConfig  ={
    key:'root',
    storage,
    blacklist:['categories','user',]
}
const persistedReducer  = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false,immutableCheck: false}).concat(logger),
});
export const persistor = persistStore(store)