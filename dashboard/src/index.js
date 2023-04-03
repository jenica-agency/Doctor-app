import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
    <App />
  </Router>
);


reportWebVitals();
