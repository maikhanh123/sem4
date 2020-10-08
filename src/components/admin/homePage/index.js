import React from "react";
import { connect } from "react-redux";
import { loadProducts } from "../../../redux/actions/admin/productActions";
import ProductList from "./ProductList";
import Spinner from "../../spinner";

class HomePage extends React.Component {
  state = {
    isLoading: false,
  };
  componentDidMount = () => {
    this.handleFetchProducts();
  };

  handleFetchProducts = () => {
    this.setState({ isLoading: true });
    this.props.loadProducts((res) => {
      console.log("res", res);
      this.setState({ isLoading: false });
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading && <Spinner />}
        <ProductList products={this.props.products} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.loadProducts.products,
  state: state,
});
export default connect(mapStateToProps, { loadProducts })(HomePage);
