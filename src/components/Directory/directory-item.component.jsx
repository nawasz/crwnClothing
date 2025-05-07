import CategoryItem from "../category-item/category-item.component";
import './directory-item.component.scss'


const Directory = ({categories}) =>
    
    ( 
        <div className="categories-container">
        {
         categories.map(({id,title,imageUrl}) => 
            <CategoryItem  Key={id} title={title} imageUrl={imageUrl} />    
         )
        }
        </div>

    )


export  default Directory;

