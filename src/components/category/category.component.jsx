import './category.styles.scss'
import { useParams } from 'react-router-dom';
import { useContext,useState,useEffect } from 'react';
import { CategoriesContext } from '../contexts/categories.context';
import ProductCard from '../product-card/product-card.components';
import { useSelector } from 'react-redux';
import {CategortSelector} from '../../store/categories/category.selector';
const Category  = ()  =>{
 
    const { category}    = useParams();
   
       console.log("from categoryComponenet")
       console.log("render/re-render"); 

    const categoriesMap = CategortSelector();
                
    console.log(categoriesMap)
   
  
    const [products,setProducts]=useState([]);
             useEffect(() =>{
                          console.log("effect fired calling setProducts")
                setProducts(categoriesMap[category]);
     
             },[category,categoriesMap]);
            
   return(

            <>
             <h2 class='title'>
                    {category.toUpperCase()}
                </h2>
             <div className="category-container">
               
           {
            products &&
             products.map((product) =>{
                   return  <ProductCard key={product.id} product ={product}/>
             })
           
           }
            </div>

            </>
              
   )
}

export default Category;