import {CATEGORY_ACTION_TYPES} from './category.types';

const INITIAL_STATE ={
     categoriesArray :[],
     isLoading:false,
     error:null
} 


export const categoryReducer = (state=INITIAL_STATE,actionType={}) =>{
const {type,payload} = actionType;
console.log(actionType)
   switch(type){
      case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_START:
              console.log(123)
              return {
               
                ...state,
                isLoading:true
                };
     case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_SUCCESS:
          console.log('Success reached with payload:', payload);
          return{
               ...state,
               categoriesArray:payload,
               isLoading:false
          };
     case CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_ERROR:
          return{
               ...state,
               error:payload,
               isLoading:false
          };
     
           default:
              return state;
   }
}