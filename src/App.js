import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../src/components/shopPage";
import RegisterPage from "../src/components/registerPage";
import LoginPage from "../src/components/loginPage";
import PrivateRoute from "../src/components/admin/privateRoute";
import HomePage from "../src/components/admin/homePage";
import ManageProduct from "../src/components/admin/manageProduct";
import Header from "../src/components/header";

function App() {
  return (
    <>
      {window.location.pathname.includes("admin") ? <Header /> : ""}
      <Switch>
        <PrivateRoute exact path="/admin" component={HomePage} />
        <PrivateRoute
          exact
          path="/admin/product/:id"
          component={ManageProduct}
        />
        <PrivateRoute
          exact
          path="/admin/addProduct"
          component={ManageProduct}
        />
        <Route exact path="/" component={ShopPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  );
}

export default App;
