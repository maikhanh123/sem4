import { UPDATE_CART } from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
