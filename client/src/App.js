import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import ProductForm from './components/ProductForm';
import { Link, Router } from '@reach/router';

function App() {
  return (
    <div className="container mt-3">
      <h1>Products Manager</h1>
      <Link className="btn btn-warning mt-2 mr-2" to="/">Products List</Link>
      <Link className="btn btn-warning mt-2" to="/new">New Product</Link>
      <Router>
        <ProductForm path="/new"/>
        <Display path="/" />
      </Router>
    </div>
  );
}

export default App;
