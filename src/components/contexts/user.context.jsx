import { createContext,useReducer } from "react";



// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER:'SET_CURRENT_USER'
}
const userReducer = (state,actionType) =>{
  const {type,payload} = actionType;
  
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
       return{
        ...state,
        currentUser:payload
       }
       default:
        throw new Error(`Unhandled type ${type} in userReducer`);
        
  }
  
  
}

const INITIAL_STATE ={
  currentUser:null
}

export const UserProvider = ({ children }) => {

        const [state,dispatch]   =  useReducer(userReducer,INITIAL_STATE);
        const  {currentUser }  = state;
        
        const  setCurrentUser = (user) =>{
                  dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user})
        } ;
        const value = { currentUser,setCurrentUser};

       

        return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
