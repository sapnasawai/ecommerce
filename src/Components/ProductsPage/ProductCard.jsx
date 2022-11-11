import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  deleteWishlistHandler,
  addWishlistHandler,
} from "../../Utils/WishlistFunc";
import { addToCartHandler } from "../../Utils/CartFunc";

export const ProductCard = ({ product }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigator = useNavigate();

  return (
    <div className="card card-vertical">
      <div onClick={() => navigator(product._id)} className="cursor-pointer">
        {!product.inStock && (
          <h2 className="out-of-stock flex-center">OUT OF STOCK</h2>
        )}
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
      </div>
      <div className="button-container">
        {cart.find((item) => item._id === product._id) ? (
          <button
            className="btn btn-secondary btn-long"
            onClick={() => navigator("/cart")}
          >
            Go to Cart
          </button>
        ) : product.inStock ? (
          <button
            className="btn btn-primary btn-long"
            onClick={() =>
              token
                ? addToCartHandler(product, setCart, token)
                : navigator("/login")
            }
          >
            Add to Cart
          </button>
        ) : (
          <button disabled className="btn btn-primary btn-long btn-disabled">
            Add to Cart
          </button>
        )}
      </div>
      {wishlist.find((item) => item._id === product._id) ? (
        <div
          className="btn-absolute cursor-pointer"
          onClick={() => deleteWishlistHandler(product._id, setWishlist, token)}
        >
          <i className="fas fa-heart fa-2x text-danger"></i>
        </div>
      ) : (
        <div
          className="btn-absolute cursor-pointer"
          onClick={() =>
            token
              ? addWishlistHandler(product, setWishlist, token)
              : navigator("/login")
          }
        >
          <i className="far fa-heart fa-2x"></i>
        </div>
      )}

      <div id="badge-absolute" className="badge bg-danger">
        New
      </div>
    </div>
  );
};
