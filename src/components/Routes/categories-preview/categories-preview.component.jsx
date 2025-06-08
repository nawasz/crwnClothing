
import {React,useContext} from 'react'
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../product-card/product-card.components';
import {Link} from 'react-router-dom'
//import './shop.styles.scss';
import Preview from '../../preview/preview-component';
import './categories-preview.styles.scss'
// import { useSelector } from 'react-redux';
import { selectCategories,selectCategoriesIsLoading } from '../../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/spinner.component'

const CategoriesPreview  = () => {

  const categoriesMap = useSelector(selectCategories);
  const isLoading  = useSelector(selectCategoriesIsLoading);
  
  return (
    <>
    {isLoading ? <Spinner/> :categoriesMap && Object.keys(categoriesMap).map(title => (
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
