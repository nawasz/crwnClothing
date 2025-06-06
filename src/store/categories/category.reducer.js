const INITIAL_STATE ={
     categoriesArray :[]
} 
export const CATEGORY_ACTION_TYPES ={
    SET_CATEGORY_MAP:'SET_CATEGORY_MAP'
}

export const categoryReducer = (state=INITIAL_STATE,actionType) =>{
const {type,payload} = actionType;

   switch(type){
      case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP:
           return {
                ...state,
                ...payload
           }
           default:
              return state;
   }
}