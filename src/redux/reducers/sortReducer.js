import { UPDATE_SORT } from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
}
