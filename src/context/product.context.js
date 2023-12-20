//import SHOP_DATA from "../shop-data";
import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';
//import {addCollectionAndDocuments}  from '../utils/firebase/firebase.utils';
// This is the actual value that i want to access
export const ProductContext=createContext({ 
  products:[],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCategoriesMap();
  }, []); // Empty dependency array indicates that this effect runs once on mount


  const value = { products };
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};