import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import ProductCard from '../product-card/product-card.components';
import { useSelector } from 'react-redux';
import {selectCategories,selectCategoriesIsLoading} from '../../store/categories/category.selector';
import Spinner from '../spinner/spinner.component';
const Category  = ()  =>{
 
    const { category}    = useParams();
    const categoriesMap = useSelector(selectCategories);
                
  
   const isLoading  = useSelector(selectCategoriesIsLoading);
     console.log(isLoading)
    const [products,setProducts]=useState([]);
             useEffect(() =>{
                 setTimeout(() =>{
                         setProducts(categoriesMap[category]);
                 },1000)        
                
     
             },[category,categoriesMap]);
            
   return(

            <>
             <h2 class='title'>
                    {category.toUpperCase()}
                </h2>
                {
                  isLoading ? <Spinner/>: <div className="category-container">
               
           {
            products &&
             products.map((product) =>{
                   return  <ProductCard key={product.id} product ={product}/>
             })
           
           }
            </div>
                }
            

            </>
              
   )
}

export default Category;