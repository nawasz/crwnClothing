import { createContext,useState,useEffect  } from "react";

// import PRODUCTS  from '../../shop-data.js'
import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
categoriesMap : {},
   
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap,setCategoriesMap] = useState({});
   
 
    useEffect(() =>{
        const getCategoriesMap = async() =>{
          
                    const categoriesMap = await getCategoriesAndDocuments();
                    setCategoriesMap(categoriesMap)
                   
        }
      getCategoriesMap();
     

    },[]);
    const value = {categoriesMap};
    
    return(
    <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
    )
}