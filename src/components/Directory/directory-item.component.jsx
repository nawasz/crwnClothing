import DirectoryItem from "../directory-item/directory-item.component";
import './directory-item.component.scss'


const Directory = ({categories}) =>
    
    ( 
        <div className="categories-container">
        {
         categories.map(({id,title,imageUrl}) => 
            <DirectoryItem  Key={id} title={title} imageUrl={imageUrl} />    
         )
        }
        </div>

    )


export  default Directory;

