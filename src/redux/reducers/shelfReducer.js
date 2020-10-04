import { FETCH_PRODUCTS } from "../actions/actionTypes";

import initialState from "./initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
