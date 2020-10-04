import { combineReducers } from "redux";
import shelfReducer from "./shelfReducer";
import filtersReducer from "./filterReducer";
import cartReducer from "./cartReducer";
import totalReducer from "./totalReducer";
import sortReducer from "./sortReducer";

const rootReducer = combineReducers({
  shelf: shelfReducer,
  filters: filtersReducer,
  cart: cartReducer,
  total: totalReducer,
  sort: sortReducer,
});

export default rootReducer;
