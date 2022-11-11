import { createContext, useContext, useReducer, useEffect } from "react";
import { getProducts } from "../Utils/GetData";
import { ProductsReducer } from "../Reducer/ProductsReducer";

const productsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productsState, productsDispatch] = useReducer(ProductsReducer, {
    products: []
  });

  useEffect(() => {
    getProducts(productsDispatch);
  }, []);
  return (
    <productsContext.Provider value={{ productsState }}>{children}</productsContext.Provider>
  );
};

const useProducts = () => useContext(productsContext);

export { useProducts, ProductsProvider };
