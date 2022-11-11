import React from "react";
import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../Reducer/FilterReducer";

const filterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, {
    inStock: false,
    fastdelivery: false,
    priceRange: 10000,
    category: [],
    rating: "",
    brandname: [],
    sortBy: false,
    search: "",
  });
  return (
    <filterContext.Provider value= {{state, dispatch}}>
        {children}
   </filterContext.Provider>
   );
};

const useFilters = () => useContext(filterContext);

export { FilterProvider, useFilters };
