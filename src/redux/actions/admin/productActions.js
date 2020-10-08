import { FETCH_PRODUCTS, LOAD_PRODUCT } from "../actionTypes";
import axios from "axios";

import { productsAPI } from "../../../services/util";

export const loadProducts = (callback) => (dispatch) => {
  return axios
    .get(productsAPI)
    .then((res) => {
      let { products } = res.data;
      console.log("api get product =>", products);
      if (!!callback) {
        callback();
      }

      return dispatch({
        type: LOAD_PRODUCT,
        payload: products,
      });
    })
    .catch((err) => {
      console.log("Could not load products. Try again later.");
    });
};
