export const USER_ACTION_TYPES = {
  SET_CURRENT_USER:'SET_CURRENT_USER'
};
 
const INITIAL_STATE ={
  currentUser:null
}
// if no value passed  to state, state will be assigned with INITIAL_STATE
export const userReducer = (state = INITIAL_STATE,actionType) =>{
  const {type,payload} = actionType;
  
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
       return{
        ...state,
        currentUser:payload
       }
       default:
        return state;
        
  }
};