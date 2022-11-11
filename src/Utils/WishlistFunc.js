import axios from "axios";
import  toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";

const addWishlistHandler = async (product, setWishlist, token) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );
    setWishlist(response.data.wishlist);
    toast.success("Added to the wishlist", ToastStyle)
  } catch (error) {
    toast.error(" Unable to add to the wishlist", ToastStyle)
  }
};

const deleteWishlistHandler = async (id, setWishlist, token) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    setWishlist(response.data.wishlist);
    toast.success("Removed from the wishlist", ToastStyle)
  } catch (error) {
    toast.error(" Unable to remove from the wishlist", ToastStyle)
  }
};

export { deleteWishlistHandler, addWishlistHandler };
