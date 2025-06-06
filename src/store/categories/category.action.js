import { useDispatch } from "react-redux";
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils'
import { useEffect } from "react";
import {createAction} from '../../utils/reducer/reducer.utils';
import {CATEGORY_ACTION_TYPES} from './category.types';
import React from 'react'


export const setCategoriesMap = (categoryArray) => createAction(CATEGORY_ACTION_TYPES.SET_CATEGORY_MAP, {categoriesArray  :categoryArray});

