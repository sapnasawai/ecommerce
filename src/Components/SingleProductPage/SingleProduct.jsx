import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import { Header } from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import {
  addWishlistHandler,
  deleteWishlistHandler,
} from "../../Utils/WishlistFunc";
import { addToCartHandler } from "../../Utils/CartFunc";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState("");
  const { authState } = useAuth();
  const { token } = authState;
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const navigator = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setSingleProduct(data.product);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  return (
    <div>
      <Header />
      <div className="single-product-wrapper">
        <div className="product-image">
          <img
            className="img-responsive"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
        </div>
        <div className="product-details flex-column gap-sm">
          <h2>{singleProduct.title}</h2>
          <h4>{singleProduct.description}</h4>
          <h4>{singleProduct.categoryName}</h4>
          <div className="product-rating flex-center">
            {singleProduct.rating}
            <i className="fas fa-star checked"></i>
          </div>
          <div>
            <div className="flex-row gap-sm">
              <h3> ₹ {singleProduct.discountedPrice}</h3>
              <h3 className="light strikethrough">₹ {singleProduct.price}</h3>
              <h4 className="discount">{singleProduct.discount}% OFF</h4>
            </div>
            <h4 className="text-success margin-b-lg">inclusive of all taxes</h4>
          </div>
          <hr />
          <h4 className={singleProduct.fastdelivery ? "" : "text-strikethrough"}>
            <i className="fas fa-truck font-inherit margin-r-xs"></i>Fast
            Delivery Available
          </h4>
          {singleProduct.inStock ? (
            <h4 >
              <i className="fas fa-check-circle font-inherit margin-r-xs"></i>
              Currently in stock
            </h4>
          ) : (
            <h4 className="text-danger">
              <i className="fas fa-ban font-inherit margin-r-xs"></i>
              OUT OF STOCK
            </h4>
          )}

          <div className="button-wrapper margin-t-lg">
            {cart.find((item) => item._id === singleProduct._id) ? (
              <button
                className="btn btn-primary bg-secondary"
                onClick={() => navigator("/cart")}
              >
                <i className="fas fa-arrow-right font-inherit margin-r-xs"></i>
                GO TO CART
              </button>
            ) : singleProduct.inStock ? (
              <button
                className="btn btn-primary"
                onClick={() =>
                  token
                    ? addToCartHandler(singleProduct, setCart, token)
                    : navigator("/login")
                }
              >
                <i className="fas fa-shopping-cart font-inherit margin-r-xs"></i>
                ADD TO CART
              </button>
            ) : (
              <button className="btn btn-primary btn-disabled" disabled>
                <i className="fas fa-shopping-cart font-inherit margin-r-xs"></i>
                ADD TO CART
              </button>
            )}
            {wishlist.find((item) => item._id === singleProduct._id) ? (
              <button
                className="btn btn-outline-secondary text-danger"
                onClick={() =>
                  deleteWishlistHandler(singleProduct._id, setWishlist, token)
                }
              >
                <i className="fas fa-heart font-inherit margin-r-xs text-danger "></i>
                REMOVE FROM WISHLIST
              </button>
            ) : (
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  token
                    ? addWishlistHandler(singleProduct, setWishlist, token)
                    : navigator("/login")
                }
              >
                <i className="fas fa-heart font-inherit margin-r-xs"></i>
                ADD TO WISHLIST
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
