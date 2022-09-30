import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import './Normalize.scss';
import { Provider } from "react-redux";
import { store } from "./redux";
import {BrowserRouter as Router} from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </React.StrictMode>
);
