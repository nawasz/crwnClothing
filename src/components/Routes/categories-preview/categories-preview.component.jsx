
import {React,useContext} from 'react'
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../product-card/product-card.components';
import {Link} from 'react-router-dom'
//import './shop.styles.scss';
import Preview from '../../preview/preview-component';
import './categories-preview.styles.scss'
// import { useSelector } from 'react-redux';
import { CategortSelector } from '../../../store/categories/category.selector';

const CategoriesPreview  = () => {
  console.log("from categoryPreview")
  const categoriesMap = CategortSelector();
  console.log(categoriesMap);
  
  return (
    <>
    {categoriesMap && Object.keys(categoriesMap).map(title => (
                       <>
                       <Link className="nav-link" to={title}>
                        <h2>{title.toUpperCase()}</h2>
                       </Link>
                         
                         <div className="product-list" >
                          {   
                          <Preview product ={categoriesMap[title]}/>
                          }
                         </div>
                       </>

                 ) )
    }
    </>
)
    
  
}

export default CategoriesPreview;
