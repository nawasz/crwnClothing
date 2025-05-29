import shopData from '../../../shop-data.json';

import {React,useContext} from 'react'
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../product-card/product-card.components';
import './shop.styles.scss'

const Shop = () => {

  const  {Products} = useContext(ProductsContext);
 

  return (
    <div className="product-list">
    {
        Products.map((Product)  => ( 
            
            <div key={Product.id}>
               <ProductCard Product={Product} />
            </div>
        ))

    }
    </div>
)
    
  
}

export default Shop
