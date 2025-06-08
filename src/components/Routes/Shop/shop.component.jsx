
import {Routes,Route} from 'react-router-dom'

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../category/category.component';
import {CategortSelector} from '../../../store/categories/category.selector'
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {getCategoriesAndDocuments} from '../../../utils/firebase/firebase.utils'
import {fetchCategoriesAsync} from '../../../store/categories/category.action'
const Shop = () => {
   const dispatch  = useDispatch();

console.log(567)
              useEffect(() =>{
                    dispatch(fetchCategoriesAsync());
                  },[]);
  
  return (
    <Routes>
      <Route index element ={<CategoriesPreview/>}></Route>
      <Route path=":category" element ={<Category/>}></Route>

    </Routes>
   );
    
  ;
}

export default Shop
