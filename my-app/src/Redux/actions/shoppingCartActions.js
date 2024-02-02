export const addToCart = (product, count = 1) => ({
  type: "ADD_TO_CART",
  payload: {
    product,
    count,
  },
});

export const removeFromCart = (product) => ({
  type: "REMOVE_FROM_CART",
  payload: {
    product,
  },
});

export const updatePaymentInfo = (paymentInfo) => ({
  type: "UPDATE_PAYMENT_INFO",
  payload: paymentInfo,
});

export const updateAddressInfo = (addressInfo) => ({
  type: "UPDATE_ADDRESS_INFO",
  payload: addressInfo,
});

export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});
