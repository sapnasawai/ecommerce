const calculateTotalDiscountedPrice = (cart) => {
  if (cart.length > 0) {
    return cart.reduce((accumulator, current) => {
      return (accumulator =
        accumulator + current.discountedPrice * current.qty);
    }, 0);
  }
  return 0;
};

const calculateTotalPrice = (cart) => {
  if (cart.length > 0) {
    return cart.reduce((accumulator, current) => {
      return (accumulator = accumulator + current.price * current.qty);
    }, 0);
  }
  return 0;
};

const calculateTotalDiscount = (totalPrice, totalDiscountedPrice) => {
  return totalPrice - totalDiscountedPrice;
};

const calculateDeliveryCharges = (totalDisountedPrice) => {
  if (totalDisountedPrice < 1000) {
    return 100;
  } else {
    return 0;
  }
};

const calculateTotalQuantity = (cart) => {
  return cart.reduce((accumulator, current) => {
    return (accumulator = accumulator + current.qty);
  }, 0);
};

const calculateTotalAmount = (totalDiscountedPrice ,deliveryCharges)=>{
    return totalDiscountedPrice + deliveryCharges;
}
export {
  calculateTotalDiscountedPrice,
  calculateTotalPrice,
  calculateTotalDiscount,
  calculateDeliveryCharges,
  calculateTotalQuantity,
  calculateTotalAmount 
};
