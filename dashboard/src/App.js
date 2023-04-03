
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import AdminRoutes from './admin/adminRoutes/AdminRoutes';
import Nav from './admin/Nav/Nav';






function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <AdminRoutes></AdminRoutes>
    </div>
  );
}

export default App;

