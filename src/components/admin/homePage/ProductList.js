import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Size</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {products.map((product) => {
        return (
          <tr key={product.id}>
            <td>
              <Link to={"/admin/product/" + product.id}>{product.title}</Link>
            </td>
            <td>{product.price} $</td>
            <td>{product.availableSizes.join()}</td>
            <td>
              <button className="btn btn-outline-danger" onClick={() => {}}>
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default ProductList;
