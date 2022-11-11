import React from "react";
import { deleteWishlistHandler } from "../../Utils/WishlistFunc";
import { addToCartHandler } from "../../Utils/CartFunc";
import { useWishlist } from "../../Context/WishlistContext";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const WishlistCard = ({ product }) => {
  const { authState } = useAuth();
  const { userInfo, token } = authState;
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart()
  const navigator = useNavigate();

  return (
    <div>
      <div className="flex-row flex-wrap gap-xl">
        <div className="card card-vertical">
          <img
            className="img-responsive"
            src={product.image}
            alt={product.title}
          />
          <div className="card-info">
            <h4>{product.title}</h4>
            <p>
              {product.categoryName}{" "}
              <span className="text-center">
                {product.rating}
                <i className="fas fa-star checked"></i>
              </span>
            </p>
          </div>
          <div className="card-price">
            <h4>₹{product.discountedPrice}</h4>
            <h4 className="light strikethrough">₹{product.price}</h4>
            <h5 className="discount">({product.discount}% OFF)</h5>
          </div>
          <div className="button-container">
            <button
              className="btn btn-outline-primary btn-long"
              onClick={() => {
                addToCartHandler(product, setCart, token, navigator);
                deleteWishlistHandler(
                  product._id,
                  setWishlist,
                  token,
                  navigator
                );
              }}
            >
              Move to Cart
            </button>
          </div>
          <span
            className="close-btn flex-center"
            onClick={() =>
              deleteWishlistHandler(product._id, setWishlist, token, navigator)
            }
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
