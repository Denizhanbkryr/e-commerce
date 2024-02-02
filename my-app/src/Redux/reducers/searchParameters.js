const initialState = {
  category: 0,
  filter: "",
  sort: "",
  offset: 0,
};
const searchParameterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "SET_OFFSET":
      return {
        ...state,
        offset: action.payload,
      };
    default:
      return state;
  }
};

export default searchParameterReducer;
