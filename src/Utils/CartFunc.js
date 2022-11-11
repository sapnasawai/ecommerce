import axios from "axios";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";
const addToCartHandler = async (product, setCart, token) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Added to the cart", ToastStyle);
  } catch (error) {
    toast.error("Unable to add to the cart", ToastStyle);
  }
};

const deleteCartItemHandler = async (id, setCart, token) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setCart(response.data.cart);
    toast.success("Removed from the cart", ToastStyle);
  } catch (error) {
    toast.error("Unable to remove from the cart", ToastStyle);
  }
};

const increaseCartItem = async (id, setCart, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Added one more product", ToastStyle);
  } catch (error) {
    toast.error("Unable to increase the quantity", ToastStyle);
  }
};

const decreaseCartItem = async (id, setCart, token) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setCart(response.data.cart);
    toast.success("Decreased the quanity", ToastStyle);
  } catch (error) {
    toast.error("Unable to decrease the quntity", ToastStyle);
  }
};

export {
  addToCartHandler,
  deleteCartItemHandler,
  increaseCartItem,
  decreaseCartItem,
};
