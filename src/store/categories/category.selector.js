import { retry } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { createSelector  } from "reselect";

// aslong as inputs are not changed ,outputs will change 

// we have to create input selectors and output selectors 


const selectCategoryReducer  = ( state) => state.categories // selecting only categories part  from whole state 
// inorder to create a memorized selector we need to declare what it is 
// create Selector creates a memoized selector 
// createSelector has 2 arguments 1.array of input selectors and 2.output selector 
export const  selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice ) => categoriesSlice.categoriesArray.reduce((acc,category) =>{
                             const {title,items} = category;
                             acc[title.toLowerCase()] = items;
                             return acc;
 },{}))
 // this will gives us back categories Array that lives on the categoriesSlice of state 
// export  const CategortSelector = () =>{
//     console.log("selector fired")
//  const categoryArray = useSelector((state) => state.categories.categoriesArray)
       
  
 
//     const categoryMap = categoryArray && categoryArray.reduce((acc,category) =>{
//             const {title,items}  = category;
//             acc[title.toLowerCase()] =  items;
//             return acc;
//     },{})
//   return categoryMap;
// }


export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

//  reduce((acc,docSnapShot)=>{
//                               //  const {title, items } = docSnapShot.data();
//                               //  acc[title.toLowerCase() ] = items;
//                               //  return acc;
//                           //  },{})
    



// 0
// : 
// {title: 'Hats', items: Array(9)}
// 1
// : 
// {items: Array(5), title: 'Jackets'}
// 2
// : 
// {title: 'Mens', items: Array(6)}
// 3
// : 
// {items: Array(8), title: 'Sneakers'}
// 4
// : 
// {title: 'Womens', items: Array(7)}
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)


