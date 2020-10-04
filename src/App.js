import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../src/components/shopPage";
import RegisterPage from "../src/components/registerPage";
import LoginPage from "../src/components/loginPage";
import PrivateRoute from "../src/components/admin/privateRoute";
import HomePage from "../src/components/admin/homePage";

const App = () => (
  <Switch>
    <PrivateRoute exact path="/admin" component={HomePage} />
    <Route exact path="/" component={ShopPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);  

export default App;
