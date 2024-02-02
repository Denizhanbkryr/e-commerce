const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the count
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].count += action.payload.count;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: action.payload.count, product: action.payload.product },
          ],
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.product.id !== action.payload.product.id
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "UPDATE_PAYMENT_INFO":
      return {
        ...state,
        payment: action.payload,
      };

    case "UPDATE_ADDRESS_INFO":
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
