import React from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../../redux/actions/admin/productActions";
import PropTypes from "prop-types";

const newProduct = {
  id: null,
  sku: 18644119330491312,
  title: "",
  description: "",
  availableSizes: [],
  price: null,
};
class ManageProduct extends React.Component {
  render() {
    console.log("aaaa");
    return <div>add</div>;
  }
}

// function ManageProduct({ loadProducts, saveProduct, ...props }) {
//   const [product, setProduct] = useState({ ...props.product });
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (loadProducts.products.length === 0) {
//       loadProducts().catch((err) => {
//         console.log("Loading failed with error", err);
//       });
//     } else {
//       setProduct({ ...props.product });
//     }
//   }, [props.product]);
// }

export function getProductById(products, id) {
  return products.find((product) => product.id === id) || null;
}

ManageProduct.propTypes = {
  product: PropTypes.object.isRequired,
  loadProducts: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const product =
    id && state.loadProducts.products.length > 0
      ? getProductById(state.loadProducts.products, id)
      : newProduct;
  return {
    products: state.loadProducts.products,
    product,
  };
};
export default connect(mapStateToProps, { loadProducts })(ManageProduct);
