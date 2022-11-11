import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { authState } = useAuth();
  const { token } = authState;

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: token,
          },
        });
        setCart(response.data.cart);
      } catch (error) {
        toast.error("Failed to load cart items", ToastStyle);
      }
    };
    getCartItems();
  }, [token]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
