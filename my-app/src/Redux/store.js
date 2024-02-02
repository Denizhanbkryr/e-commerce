import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import globalReducer from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import storeReducer from "./reducers/storeReducer";
import searchParameterReducer from "./reducers/searchParameters";

const rootReducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  searchParams: searchParameterReducer,
  store: storeReducer,
});

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export { store, Provider };
