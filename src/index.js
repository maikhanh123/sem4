import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.scss';
import App from './App';
import store from './redux/store';
import { Provider as ReduxProvider } from "react-redux";


let initialState = {} ;
ReactDOM.render(
  <ReduxProvider store={store(initialState)}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);



