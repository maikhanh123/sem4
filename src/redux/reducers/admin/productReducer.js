import { LOAD_PRODUCT } from "../../actions/actionTypes";

import initialState from "../initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT:
      console.log("action", action);
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
