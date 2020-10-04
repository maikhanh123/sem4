import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import './index.scss';
import App from './App';
import store from './redux/store';
import { Provider as ReduxProvider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { history } from "./services/history";
// setup fake backend
import { configureFakeBackend } from "./services/fake-backend";
configureFakeBackend();


let initialState = {} ;
ReactDOM.render(
  <ReduxProvider store={store(initialState)}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("root")
);



