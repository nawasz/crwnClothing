import React from 'react'
import ProductCard from '../product-card/product-card.components';
const Preview = ({product}) => {

  return (
    <>
   {
      product.filter((_,idx) => idx < 4).map((product) =>(
                <ProductCard key={product.id} product={product} />
      ))

      
      
   }
</>
  )
}

export default Preview;
