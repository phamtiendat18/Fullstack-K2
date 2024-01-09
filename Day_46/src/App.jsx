import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart";
const App = () => {
  const product = useSelector((state) => {
    return state.products.productDetail;
  });
  const { _id, name } = product;
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/detail/:${_id}`} element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
