import React from "react";
import { useCart } from "../../Context/CartContext";
import { Header } from "../Header/Header.jsx";
import { CartCard } from "./CartCard";
import "./Cart.css";
import { OrderDetails } from "./OrderDetails";

const Cart = () => {
  const { cart } = useCart();
  return (
    <div>
      <Header />
      <div className="cart-wrapper">
        <div className="cart-main">
          <div className="cart-cards flex-column gap-xl">
            {cart.length !== 0 ? (
              cart.map((product) => (
                <CartCard product={product} key={product.id} />
              ))
            ) : (
              <h2 className="flex-center margin-auto text-primary">
                Your cart is empty
              </h2>
            )}
          </div>
          {cart.length !== 0 && <OrderDetails/>}
        </div>
      </div>
    </div>
  );
};
export { Cart };
