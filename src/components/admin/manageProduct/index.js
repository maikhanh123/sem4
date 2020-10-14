import React from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../../redux/actions/admin/productActions";
import PropTypes from "prop-types";
import ProductForm from "./ProductForm";

const newProduct = {
  id: null,
  sku: 18644119330491312,
  title: "",
  description: "",
  availableSizes: [],
  price: null,
};
class ManageProduct extends React.Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  handleFetchProducts = () => {
    this.setState({ isLoading: true });
    this.props.loadProducts((res) => {
      console.log("res", res);
      this.setState({ isLoading: false });
    });
  };

  render() {
    console.log("aaaa");
    const { product } = this.props;
    return <ProductForm product={product} />;
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

// const mapStateToProps = (state) => ({
//   products: state.loadProducts.products,
//   state: state,
// });
export default connect(mapStateToProps, { loadProducts })(ManageProduct);
