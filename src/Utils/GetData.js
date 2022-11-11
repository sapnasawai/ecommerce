import axios from "axios";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";
import { GET_PRODUCTS } from "../Constants/ProductsConstants";

const getProducts = async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch({
      type: GET_PRODUCTS,
      payload: response.data.products,
    });
  } catch (error) {
    toast.error("Failed to load the products", ToastStyle);
  }
};

export { getProducts };
