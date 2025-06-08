import { useDispatch } from "react-redux";
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils'
import { useEffect } from "react";
import {createAction} from '../../utils/reducer/reducer.utils';
import {CATEGORY_ACTION_TYPES} from './category.types';
import React from 'react'


export const setCategoriesMap = (categoryArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, {categoriesArray  :categoryArray});

export const fetchCategoriesStart = () => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_SUCCESS,categoriesArray);

export const fetchCategoriesError  = (error) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP_ERROR,error);

export const fetchCategoriesAsync = () =>  async (dispatch) =>{
     
       dispatch(fetchCategoriesStart())
      try{
        
         const categoriesArray = await getCategoriesAndDocuments();
         
         dispatch(fetchCategoriesSuccess(categoriesArray))
      
      }catch(error){
        dispatch(fetchCategoriesError(error));
      }
}