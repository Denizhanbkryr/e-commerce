const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: {
          ...action.payload.user,
        },
        token: action.payload.token,
        error: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
