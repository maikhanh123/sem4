import { combineReducers } from "redux";
import shelfReducer from "./shelfReducer";
import filtersReducer from "./filterReducer";
import cartReducer from "./cartReducer";
import totalReducer from "./totalReducer";
import sortReducer from "./sortReducer";
import userReducer from "./userReducer";
import registerReducer from "./registerReducer";
import authenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
  shelf: shelfReducer,
  filters: filtersReducer,
  cart: cartReducer,
  total: totalReducer,
  sort: sortReducer,
  users: userReducer,
  registration: registerReducer,
  authentication: authenticationReducer,
});

export default rootReducer;
