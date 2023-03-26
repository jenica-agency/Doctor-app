import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';

import {BrowserRouter as Router} from 'react-router-dom';

import './i18n';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
    <App />
  </Router>
);


reportWebVitals();
