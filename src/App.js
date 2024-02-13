import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom"
import ProductComponents from "./containers/ProductComponents";
import { ProductDetails } from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";


function App() {
  return (
    <div className="App">
    <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
