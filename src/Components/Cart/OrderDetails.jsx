import React from "react";
import "./Cart.css";
import {
  calculateTotalDiscountedPrice,
  calculateTotalPrice,
  calculateTotalDiscount,
  calculateDeliveryCharges,
  calculateTotalQuantity,
  calculateTotalAmount,
} from "../../Utils/OrderDetailsFunc";
import { useCart } from "../../Context/CartContext";

const OrderDetails = () => {
  const { cart } = useCart();

  const totalPrice = calculateTotalPrice(cart);
  const totalDiscountedPrice = calculateTotalDiscountedPrice(cart);
  const totalDiscount = calculateTotalDiscount(
    totalPrice,
    totalDiscountedPrice
  );
  const deliveryCharges = calculateDeliveryCharges(totalDiscountedPrice);
  const totalQuantity = calculateTotalQuantity(cart);
  const totalAmount = calculateTotalAmount(
    totalDiscountedPrice,
    deliveryCharges
  );

  return (
    <>
      <div className="price-details flex-column gap-sm ">
        <h4 className="flex-center">PRICE DETAILS</h4>
        <div className="padding-y-sm">
          <ul className="flex-row justify-content-space-btw">
            <p>Total Price</p>
            <p>₹{totalPrice}</p>
          </ul>
          <ul className="flex-row justify-content-space-btw">
            <p>Discount</p>
            <p className="text-success font-weight-bold">-₹{totalDiscount}</p>
          </ul>
          <ul className="flex-row justify-content-space-btw">
            <p>Total Discounted Price</p>
            <p>₹{totalDiscountedPrice}</p>
          </ul>
          <ul className="flex-row justify-content-space-btw">
            <p>Delivery Charges</p>
            <p>{deliveryCharges}</p>
          </ul>
        </div>
        <ul className="flex-row justify-content-space-btw">
          <h4>Total Amount</h4>
          <h4>₹{totalAmount}</h4>
        </ul>
        <p>You will save <span className="text-success font-inherit font-weight-bold">₹{totalDiscount} </span>on this order</p>
        <div className="primary-btn text-center">
          <button className=" btn btn-primary btn-long">Place Order</button>
        </div>
      </div>
    </>
  );
};
export { OrderDetails };
