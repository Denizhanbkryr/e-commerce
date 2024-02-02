const initialState = {
  sellerStore: null,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELLER_STORE":
      return {
        ...state,
        sellerStore: action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;
